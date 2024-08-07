'use client';
import { Button } from '@/components/ui/button';
import { chatSession } from '@/utils/GemininiModal';
import { db } from '@/utils/db';
import { UserAnswers } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { char } from 'drizzle-orm/pg-core';
import { Mic, StopCircle } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useSpeechToText from 'react-hook-speech-to-text';
import Webcam from 'react-webcam';
import { toast } from 'sonner';

export default function RecordAnswerSection({ mockInterviewQuestion, activeIndex, onSetActiveIndex, interviewData, ...data }) {
 
    const [userAnswers, setUserAnswers] = useState('');
    const [loading, setLoading] = useState(false)
    console.log("interview data", interviewData)
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false,
    });
    const { user } = useUser();
    console.log("is recording", isRecording);

    const saveAnswerToDB = async (jsonResponse) => {
        try {
            const res = await db.insert(UserAnswers).values({
                mockidRef: interviewData?.mockId,
                question: mockInterviewQuestion.technical[activeIndex]?.question ? mockInterviewQuestion.technical[activeIndex]?.question : '',
                correctAns: mockInterviewQuestion.technical[activeIndex]?.answer ? mockInterviewQuestion.technical[activeIndex]?.answer : '',
                userAns: userAnswers,
                feedback: jsonResponse?.feedback,
                rating: jsonResponse?.rating,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                createdAt: moment().format('DD-MM-YYYY')

            })
            if (res) {
                toast.success("User Answers Saved Successfully !")
                setUserAnswers("")
            }
        } catch (error) {
            console.log("error while saving the answer", error)
        }
    }

    const updateDBwithAnswers =()=>{
        if (mockInterviewQuestion?.technical && mockInterviewQuestion?.technical.length > 0) {
            const feedbackPrompt = "Question:" + mockInterviewQuestion.technical[activeIndex]?.question + ",User Answer: " + userAnswers + 'Depends on the  Question sand user ansers ,please give us rating for the answer and feedback as area of improvment if any in just 3-5 lines to imporve it in JSON format with rating field and feedback feild';
            sendMessageToAI(feedbackPrompt)
        }
    }

    const sendMessageToAI = async (prompt) => {
        try {
            const res = await chatSession.sendMessage(prompt);
            console.log("res comes like", res)
            const mockJsonResponse = (res.response.text()).replace('```json', '').replace('```', '');
            console.log("moc json response", mockJsonResponse)
            const jsonFeedbackResponse = JSON.parse(mockJsonResponse);
            saveAnswerToDB(jsonFeedbackResponse)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log("error while getting AI response", error)
        }
        finally {
            setLoading(false)
        }
    }


    const handleRecordingToggle = () => {
        console.log("clicked")
        // console.log("results", await startSpeechToText())
        if (isRecording) {
            setLoading(true)
            stopSpeechToText();
            if (userAnswers?.length < 10) {
                setLoading(false)
                toast.error("Please record atleast 10 seconds")
                return;
            }
            updateDBwithAnswers();

        } else {
            startSpeechToText();
        }
    };

    useEffect(() => {
        results?.map((answer) => (
            setUserAnswers(prevState => prevState + answer?.transcript)
        )
        )
    }, [results])

    useEffect(()=>{

        if(!isRecording && userAnswers.length>0){
            updateDBwithAnswers();
        }
    },[userAnswers])

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='relative bg-black'>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <Image src={"/webcam.png"} width={200} height={200} />
                </div>
                <Webcam
                    mirrored
                    style={{
                        height: 300,
                        width: '100%',
                        zIndex: 10,
                    }}
                />
            </div>

            <Button disabled={loading} onClick={handleRecordingToggle} className="my-10" variant="outline">
                {
                    isRecording ? (
                        <h2 className='text-red-600 flex gap-2 items-center animate-blink'>
                            <StopCircle /> Stop Recording
                        </h2>
                    ) : (
                        <h2 className='text-primary flex gap-2 items-center'><Mic />Record Answer</h2>
                    )
                }
            </Button>
            {/* <Button onClick={() => { console.log("user anser ++++", userAnswers) }}>Show User Answers</Button> */}
        </div>
    );
}
