'use client'
import QuestionSection from '@/app/dashboard/_components/QuestionSection'
import RecordAnswerSection from '@/app/dashboard/_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'

export default function StartInterview({ params }) {

    const [interviewData, setInterviewData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [mockInterViewQuestion, setMockInterviewQuestion] = useState([]);
    const handleSetActiveIndex = (index) => {
        setActiveIndex(index);
    };
    console.log("mock interview Questions", mockInterViewQuestion)

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
        if (res) {
            setInterviewData(res[0]);
            const jsonData = JSON.parse(res[0].jsonMockResponse);
            setMockInterviewQuestion(jsonData)
        }
    }

    console.log("interview questions", mockInterViewQuestion?.length);
    console.log("active index", activeIndex)

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* Questions */}
                <QuestionSection
                    mockInterviewQuestion={mockInterViewQuestion}
                    activeIndex={activeIndex}
                    onSetActiveIndex={handleSetActiveIndex}
                />
                {/* Video Audio Recording */}
                <RecordAnswerSection
                    activeIndex={activeIndex}
                    onSetActiveIndex={handleSetActiveIndex}
                    mockInterviewQuestion={mockInterViewQuestion}
                    interviewData={interviewData} />
            </div>
            <div className='flex justify-end gap-4 px-12'>
                {activeIndex > 0 && <Button onClick={() => setActiveIndex(activeIndex - 1)}>Previous Button</Button>}
                {activeIndex !== mockInterViewQuestion && mockInterViewQuestion?.length - 1 && <Button onClick={() => setActiveIndex(activeIndex + 1)}>Next Button</Button>}
                {activeIndex === mockInterViewQuestion && mockInterViewQuestion?.length - 1 && (<Button>End Interview</Button>)}
            </div>
        </>

    )
}
