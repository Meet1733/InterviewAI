"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react'

function RecordAnsSection() {
    const [userAnswer, setuserAnswer] = useState('');
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
        results.map((result) => (
            setuserAnswer(prevAns => prevAns + result?.transcript)
        ))
    }, [results])

    const SaveUserAnswer = () => {
        if (isRecording) {
            stopSpeechToText();
        } else {
            startSpeechToText();
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
                <Image src={'/webcam.png'} width={200} height={200} className='absolute' alt='webcam-img' />
                <Webcam
                    mirrored={true}
                    style={{
                        height: 300,
                        width: "100%",
                        zIndex: 10,
                    }}
                />
            </div>

            <Button
                variant="outline"
                className="my-10"
                onClick={SaveUserAnswer}
            >
                {isRecording ? <h2 className='text-red-600 flex gap-2 items-center'><Mic />Stop Recording</h2>
                    : <h2 className='text-primary flex gap-2 items-center'><Mic />Record Answer</h2>}
            </Button>

            <Button onClick={() => console.log(userAnswer)}>Show User Answer</Button>
        </div>

    )
}

export default RecordAnsSection