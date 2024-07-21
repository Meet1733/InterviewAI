"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


function AddNewInterview() {
    const [dialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState();
    const [jobDescription, setJobDescription] = useState();
    const [jobExperience, setJobExperience] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(jobPosition, jobDescription, jobExperience);
    }
    return (
        <div>
            <div
                className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
                onClick={() => {
                    setOpenDialog(true)
                }}>
                <h2 className='text-lg text-center'>+ Add New</h2>
            </div>
            <Dialog open={dialog}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="font-bold text-2xl">Tell us more about Job you are interviewing</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={onSubmit}>
                                <div>
                                    <h2>Add Details about your job</h2>

                                    <div className='mt-7 my-3'>
                                        <label> Job Role/Job Position</label>
                                        <Input placeholder="Ex. Full Stack Developer" required
                                            onChange={(event) => { setJobPosition(event.target.value) }} />
                                    </div>

                                    <div className='mt-7 my-3'>
                                        <label> Job Description/Tech Stack (In Short)</label>
                                        <Textarea placeholder="Ex. React, Angular, NodeJs, MySQL, etc" required
                                            onChange={(event) => { setJobDescription(event.target.value) }} />
                                    </div>

                                    <div className='my-3'>
                                        <label>Years of experience</label>
                                        <Input placeholder="Ex. 5" type="number" max="50" required
                                            onChange={(event) => { setJobExperience(event.target.value) }} />
                                    </div>
                                </div>
                                <div className='flex gap-5 justify-end'>
                                    <Button type="button" variant="ghost" onClick={() => { setOpenDialog(false) }}>Cancel</Button>
                                    <Button type="submit">Start Interview</Button>
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