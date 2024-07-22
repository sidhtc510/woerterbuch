import React from 'react'
import MobileMenu from '../MobileMenu'
import Link from 'next/link'
import { GiBurningBook } from "react-icons/gi";
import CustomLink from '../CustomLink';

export default function NavBar() {

    return (
        <div className='h-24 flex justify-between items-center px-4 md:px-12 bg-slate-200'>
            <div className='flex items-center'>
                <Link href='/' className='text-xl text-indigo-600 font-semibold cursor-pointer flex items-center gap-2'>
                    <GiBurningBook className='text-2xl' /> Wörterbuch
                </Link>
            </div>
            <div className=' hidden md:flex md:gap-1'>
                <CustomLink href={'/'} className={'w-fit flex items-center gap-1 h-[60px] pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none no-underline'}>Nomen</CustomLink>
                <CustomLink href={'/verbs'} className={'w-fit flex items-center gap-1 h-[60px] pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none no-underline'}>Verbs</CustomLink>
                <CustomLink href={'/derdasdie_game'} className={'w-fit flex items-center gap-1 h-[60px] pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none no-underline'}>Let`s play "Der Die Das" Game</CustomLink>
                <a href="https://www.buymeacoffee.com/sidhtc510" target="_blank" className='flex items-center'><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className='h-[60px], w-[217px]' /></a>
            </div>
            <MobileMenu />
        </div>
    )
}
