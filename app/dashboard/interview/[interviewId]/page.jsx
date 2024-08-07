'use client'
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam';

export default function Interview({ params }) {
    const [interviewData, setInterviewData] = useState([]);
    const [webCamEnabled, setWebCamEnabled] = useState(false);
    useEffect(() => {
        console.log(params);
        getInterviewDetails()
    }, [])
    /**
     * 
     * Used to get Interview details by using mockId
     */
    const getInterviewDetails = async () => {
        const res = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId));
        console.log("res comes like", res)
        if (res) setInterviewData(res[0])
    }
    return (
        <div className='my-10'>
            <h2 className='font-bold text-2xl'>Let's Get Started</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='flex flex-col my-5 gap-5'>
                    <div className='flex flex-col my-5 gap-5 p-5 border rounded-lg'>
                        <h2 className='text-lg'><strong>Job Role/Job Position:</strong>{interviewData.jobPosition}</h2>
                        <h2 className='text-lg'><strong>Job Description/Tech Stack:</strong>{interviewData.jobDesc}</h2>
                        <h2 className='text-lg'><strong>Years of Experience:</strong>{interviewData.jobExperience}</h2>
                    </div>
                    <div className='p-5 border rounded-lg border border-yellow-500 bg-yellow-200'>
                        <h2 className='flex gap-2 items-center text-yellow-500'><Lightbulb /><strong>Information</strong></h2>
                        <h2>Enable Video Web Cam and Microphone to Start Your AI Generated Mock Interview. It Has 5 question which you can answer at the last you will get the report on the basis of your answer.</h2>
                    </div>
                </div>
                {
                    webCamEnabled ? <Webcam mirrored={true} onUserMediaError={() => setWebCamEnabled(false)} onUserMedia={() => setWebCamEnabled(true)} style={{
                        height: 300,
                        width: 300
                    }} />
                        : <div >
                            <WebcamIcon className='h-72 my-7 w-full p-20 rounded-lg border bg-secondary' />
                            <Button variant='ghost' className="w-full" onClick={() => setWebCamEnabled(true)}>Enabled Webcam and Microphone</Button>
                        </div>
                }


            </div>
            <div className='flex justify-end items-end mt-12'>
                <Link href={`/dashboard/interview/${params.interviewId}/start`}>
                    <Button>Start Interview</Button>
                </Link>

            </div>
        </div>
    )
}
