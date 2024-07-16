"use client"
import React, { useState } from 'react'
import CustomLink from '../CustomLink';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className='flex gap-1 md:hidden'>
            <div onClick={() => setIsOpen(prev => !prev)} className={`flex flex-col cursor-pointer ${isOpen ? "gap-[4.5px]" : "gap-[5px]"}`}>
                <div className={`w-6 h-1 bg-indigo-600 rounded-sm origin-left ease-in-out duration-100 ${isOpen ? "rotate-45" : ""}`} />
                <div className={`w-6 h-1 bg-indigo-600 rounded-sm ease-in-out duration-100 ${isOpen ? "opacity-0" : ""}`} />
                <div className={`w-6 h-1 bg-indigo-600 rounded-sm origin-left ease-in-out duration-100 ${isOpen ? "-rotate-45" : ""}`} />
            </div>

            <div className={`fixed w-full left-0 top-24 h-[calc(100vh-96px)] bg-slate-200 flex flex-col items-center justify-start gap-1 z-20 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} ease-in-out duration-500 `}>
                {/* <Link href={'/addword'} onClick={handleLinkClick} className='w-fit pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 block' >ein neues Wort hinzufügen</Link>
                <Link href={'/ai-generator'} onClick={handleLinkClick} className='w-fit flex items-center gap-1 pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3'>AI Generator <BsStars className="text-orange-600 text-lg" /></Link> */}

                <CustomLink onClick={handleLinkClick} href={'/'} className='w-fit flex items-center gap-1 pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 no-underline'>Nomen</CustomLink>
                <CustomLink className='w-fit flex items-center gap-1 pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 no-underline' onClick={handleLinkClick} href={'/verbs'}>Verbs</CustomLink>
                <CustomLink className='w-fit flex items-center gap-1 pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 no-underline' onClick={handleLinkClick} href={'/derdasdie_game'}>DerDasDie</CustomLink>
            </div>
        </div>
    )
}
