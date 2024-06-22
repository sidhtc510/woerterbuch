import React from 'react'
import MobileMenu from '../MobileMenu'
import Link from 'next/link'

export default function NavBar() {
    return (
        <div className='h-24 flex justify-between items-center px-4 md:px-12 bg-slate-200'>
            <div >
                <Link href={"/"} className='text-xl text-indigo-600 font-semibold'>
                    Wörterbuch
                </Link>
            </div>
            <div className='flex justify-center gap-1'>
                <div className='rounded-lg p-1 text-sm text-white bg-indigo-300'> der</div>
                <div className='rounded-lg p-1 text-sm text-white bg-red-300'> die</div>
                <div className='rounded-lg p-1 text-sm text-white bg-emerald-300'> das</div>
            </div>
            <MobileMenu />
        </div>
    )
}
