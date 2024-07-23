"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path = usePathname();
    useEffect(() => {
        console.log(path);
    }, [path])
    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
            <Link href={'/'}>
                <div className='flex gap-2 items-center'>
                    <Image src={'/logo.svg'} width={41} height={41} alt='logo' />
                    <h1 className='text-2xl text-primary font-bold'>InterviewAI</h1>
                </div>
            </Link>

            <ul className='hidden md:flex gap-6'>
                <Link href={'/'}><li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/' && ' text-primary font-bold'}`}>Home</li></Link>
                <Link href={'/dashboard'}><li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard' && ' text-primary font-bold'}`}>Dashboard</li></Link>
                {/* <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard/upgrade' && ' text-primary font-bold'}`}>Upgrade</li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard/how' && ' text-primary font-bold'}`}>How it works</li> */}
            </ul>
            <UserButton />
        </div>
    )
}

export default Header