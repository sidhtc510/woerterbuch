'use client'
import React from 'react'
import MobileMenu from '../MobileMenu'
import Link from 'next/link'

export default function NavBar() {

    return (
        <div className='h-24 flex justify-between items-center px-4 md:px-12 bg-slate-200'>
            <div className='flex items-center'>
                <Link href='/' className='text-xl text-indigo-600 font-semibold cursor-pointer'>
                    Wörterbuch
                </Link>
            </div>
            <div className=' hidden md:flex md:gap-1'>
                <Link className='w-fit flex items-center gap-1 pointer-events-auto text-[0.8125rem] leading-5 cursor-pointer select-none m-3 underline' href={'/'}>Nomen</Link>
                <Link className='w-fit flex items-center gap-1 pointer-events-auto text-[0.8125rem] leading-5 cursor-pointer select-none m-3 underline' href={'/verbs'}>Verbs</Link>
            </div>
            <MobileMenu />
        </div>
    )
}
