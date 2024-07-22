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
                <CustomLink href={'/'}>Nomen</CustomLink>
                <CustomLink href={'/verbs'}>Verbs</CustomLink>
                <CustomLink href={'/derdasdie_game'}>Let`s play "Der Die Das" Game</CustomLink>
                <a href="https://www.buymeacoffee.com/sidhtc510" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className='h-[60px], w-[217px]' /></a>
            </div>
            <MobileMenu />
        </div>
    )
}
