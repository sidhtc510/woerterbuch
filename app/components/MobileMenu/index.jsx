"use client"
import Link from 'next/link';
import React, { useState } from 'react'

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className=''>

            <div onClick={() => setIsOpen(prev => !prev)} className='flex flex-col gap-[4.5px] cursor-pointer'>
                <div className={`w-6 h-1 bg-indigo-600 rounded-sm origin-left ease-in-out duration-200 ${isOpen ? "rotate-45" : ""}`} />
                <div className={`w-6 h-1 bg-indigo-600 rounded-sm ease-in-out duration-200 ${isOpen ? "opacity-0" : ""}`} />
                <div className={`w-6 h-1 bg-indigo-600 rounded-sm origin-left ease-in-out duration-200 ${isOpen ? "-rotate-45" : ""}`} />
            </div>

            {isOpen && (
                <div className='absolute w-full left-0 top-24 h-[calc(100vh-96px)] bg-slate-200 flex flex-col items-center justify-center gap-8 z-20'>
                    <Link href={'/addword'} onClick={handleLinkClick} className='w-fit pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 block'>Add Word</Link>
                </div>
            )}
        </div>
    )
}
