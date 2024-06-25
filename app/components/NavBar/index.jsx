'use client'
import React from 'react'
import MobileMenu from '../MobileMenu'

import { useDispatch } from 'react-redux'
import { filterByArticle } from '@/app/store/slice/wordsSlice'
import Link from 'next/link'

export default function NavBar() {
    const dispatch = useDispatch();

    return (
        <div className='h-24 flex justify-between items-center px-4 md:px-12 bg-slate-200'>
            <div >
                <Link href='/' className='text-xl text-indigo-600 font-semibold cursor-pointer'>
                    Wörterbuch
                </Link>
                {/* <Link href='testPage'>testPage</Link> */}
            </div>
            <div className=''>
                <p className='text-xs'> Artikelfilterung </p>
                <div className='flex justify-center gap-1'>
                    <div className='rounded-lg p-1 text-sm text-white bg-indigo-300 cursor-pointer select-none' onClick={() => dispatch(filterByArticle('der'))}> der</div>
                    <div className='rounded-lg p-1 text-sm text-white bg-red-300 cursor-pointer select-none' onClick={() => dispatch(filterByArticle('die'))}> die</div>
                    <div className='rounded-lg p-1 text-sm text-white bg-emerald-300 cursor-pointer select-none' onClick={() => dispatch(filterByArticle('das'))}> das</div>
                </div>
            </div>
            <MobileMenu />
        </div>
    )
}