'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GemininiModal'
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utils/db'
import {v4 as uuid4} from 'uuid'
import { MockInterview } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useRouter } from 'next/navigation'

const AddNewInterview = () => {
    const [openModal, setOpenModal] = useState(false);
    const [jobRole, setJobRole] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [loading, setLoading] = useState(false);
    const [jsonResponse, setJsonResponse] = useState([]);
    const {user} = useUser();
    const router = useRouter();

    const saveResponseToDB= async(data)=> {
        const res = await db.insert(MockInterview).values({
            mockId:uuid4(),
            createdBy:user?.primaryEmailAddress?.emailAddress,
            jsonMockResponse:data,
            jobPosition:jobRole,
            jobDesc:jobDescription,
            jobExperience:yearsOfExperience,
            createdAt:moment().format('YYYY-MM-DD')

        }).returning({mockId:MockInterview.mockId})
    console.log("response ", res)

    if(res){
        setOpenModal(false);
        router.push('/dashboard/interview/'+res[0].mockId)
    }

    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const InputPrompt = "Job Role:" + jobRole + ", Job Description:" + jobDescription + ", Years of experince:" + yearsOfExperience + ", based on the data, provide me interview questions with answers in the json format";
            
            const result = await chatSession.sendMessage(InputPrompt);
            console.log("result comes like", result)
            const mockJsonResponse = (result.response.text()).replace('```json','').replace('```','');
            setJsonResponse(mockJsonResponse)
            console.log("results comes", JSON.parse(mockJsonResponse));
            if(result) saveResponseToDB(mockJsonResponse)
        } catch (error) {
            console.error("Error during API call:", error);
        } finally {
            setLoading(false);
            setOpenModal(false);
        }
    }
    return (
        <div>
            <div onClick={()=>setOpenModal(true)} className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer'>
                <h2 className='font-bold text-lg text-center'>+ Add </h2>
            </div>
            <Dialog open={openModal} >
                <DialogContent  className="!max-w-2xl">
                    <DialogHeader>
                        <DialogTitle  className='font-bold text-2xl'> Tell us More About Your Job Interview</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={handleFormSubmit}>
                                <div >     
                                    <h2>Add Details about your job position/role, job description and years of experience</h2>
                                    <div className='mt-7 my-3'>
                                        <label>Job Role/Job Position</label>
                                        <Input 
                                            required 
                                            className="mt-1" 
                                            placeholder='Ex. Full Stack Developer' 
                                            value={jobRole}
                                            onChange={(e) => setJobRole(e.target.value)}
                                        />
                                    </div>
                                    <div className='mt-7 my-3'>
                                        <label>Job Description/ Tech Stack (In Short)</label>
                                        <Textarea 
                                            required 
                                            className="mt-1" 
                                            placeholder='Ex. React , Vue, NodeJS, MySQL' 
                                            value={jobDescription}
                                            onChange={(e) => setJobDescription(e.target.value)}
                                        />
                                    </div>
                                    <div className='mt-7 my-3'>
                                        <label>Years of Experience</label>
                                        <Input 
                                            max="20" 
                                            className="mt-1" 
                                            placeholder='5' 
                                            type="number" 
                                            required 
                                            value={yearsOfExperience}
                                            onChange={(e) => setYearsOfExperience(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-5 justify-end mt-5'>
                                    <Button type="button" onClick={() => setOpenModal(false)} variant='ghost'>Cancel</Button>
                                    <Button disabled={loading} type="submit">{loading ?<><LoaderCircle className='animate-spin'/><span>Generating From AI</span></> :'Start Interview'}</Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview
