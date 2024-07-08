'use client'
import React from 'react'
import MobileMenu from '../MobileMenu'
import { PiMagicWand } from "react-icons/pi";
import Link from 'next/link'

export default function NavBar() {
    // const dispatch = useDispatch();

    return (
        <div className='h-24 flex justify-between items-center px-4 md:px-12 bg-slate-200'>
            <div className='flex items-center'>
                <Link href='/' className='text-xl text-indigo-600 font-semibold cursor-pointer'>
                    Wörterbuch
                </Link>
                {/* <Link href='testPage'>testPage</Link> */}
                {/* <p className='pl-2'>+</p>
                <p className='w-fit flex items-center gap-1 pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white select-none m-3'>AI Generator <PiMagicWand className="text-orange-600 text-lg" /></p> */}
            </div>
           <div className='flex gap-1'>
           <Link className='w-fit flex items-center gap-1 pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3' href={'/'}>Nomen</Link>
           <Link className='w-fit flex items-center gap-1 pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3' href={'/verbs'}>Verbs</Link>
           </div>
            {/* <div className=''>
                <p className='text-xs'> Artikelfilterung </p>
                <div className='flex justify-center gap-1'>
                    <div className='rounded-lg p-1 text-sm text-white bg-indigo-300 cursor-pointer select-none' onClick={() => dispatch(filterByArticle('der'))}> der</div>
                    <div className='rounded-lg p-1 text-sm text-white bg-red-300 cursor-pointer select-none' onClick={() => dispatch(filterByArticle('die'))}> die</div>
                    <div className='rounded-lg p-1 text-sm text-white bg-emerald-300 cursor-pointer select-none' onClick={() => dispatch(filterByArticle('das'))}> das</div>
                </div>
            </div> */}
            <MobileMenu />
        </div>
    )
}
