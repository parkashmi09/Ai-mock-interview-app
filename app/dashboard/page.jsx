import React from 'react'
import DashboardLayout from './layout'
import { UserButton } from '@clerk/nextjs'
import AddNewInterview from './_components/AddNewInterview'

export default function Dashboard() {
    return (
        <div className='p-10'>
            <h2 className='font-bold text-2x; '>Dashboard</h2>
            <h2 className='text-gray-500'>Craete and Start Your AI Mockup Interview</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 my-5'>
                <AddNewInterview />
            </div>
        </div>
    )
}
