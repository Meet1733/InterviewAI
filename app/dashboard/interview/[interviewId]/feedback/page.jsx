"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

function Feedback({ params }) {
    const [feedbackList, setFeedbackList] = useState([]);
    const [totalRating, setTotalRating] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const GetFeedback = async () => {
            const result = await db.select().from(UserAnswer).where(
                eq(UserAnswer.mockIdRef, params.interviewId)
            ).orderBy(UserAnswer.id);

            console.log(result);
            setFeedbackList(result);

            let tr = 0;
            if (result && result.length > 0) {
                result.forEach((item) => {
                    tr += Number(item.rating);
                });

                console.log(tr);
                tr /= result.length;

                setTotalRating(tr);
            }
        }
        GetFeedback();
    }, [params.interviewId])

    // const GetFeedback = async () => {
    //     const result = await db.select().from(UserAnswer).where(
    //         eq(UserAnswer.mockIdRef, params.interviewId)
    //     ).orderBy(UserAnswer.id);

    //     console.log(result);
    //     setFeedbackList(result);

    //     let tr = 0;
    //     if (result && result.length > 0) {
    //         result.forEach((item) => {
    //             tr += Number(item.rating);
    //         });

    //         console.log(tr);
    //         tr /= result.length;

    //         setTotalRating(tr);
    //     }
    // }

    return (
        <div className='p-10'>

            {feedbackList?.length == 0 ?
                <h2 className='font-bold text-xl text-gray-500 mb-2'>No Interview Record Found</h2>
                :
                <>
                    <h2 className='text-3xl font-bold text-green-500'>Congratulations!</h2>
                    <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>
                    <h2 className='text-primary text-lg my-3'>Your overall interview raing: <strong>{totalRating}/10</strong></h2>

                    <h2 className='text-sm text-gray-500'>Find below interview question with correct answer, Your answer and feedback for improvement</h2>

                    {feedbackList && feedbackList.map((item, index) => (
                        <Collapsible key={index} className='mt-7'>
                            <CollapsibleTrigger className='flex justify-between p-2 bg-secondary rounded-lg my-2 text-left gap-7 w-full'>
                                {item.question} <ChevronsUpDown className='w-5 h-5' />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating: </strong>{item.rating}</h2>
                                    <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'><strong>Your Answer: </strong>{item.userAnswer}</h2>
                                    <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'><strong>Correct Answer: </strong>{item.correctAnswer}</h2>
                                    <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-primary'><strong>Feedback: </strong>{item.feedback}</h2>

                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    ))}
                </>
            }




            <Button onClick={() => router.replace('/dashboard')}>Go Home</Button>
        </div>
    )
}

export default Feedback