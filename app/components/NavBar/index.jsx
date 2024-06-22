import React from 'react'
import MobileMenu from '../MobileMenu'
import Link from 'next/link'

export default function NavBar() {
    return (
        <div className='h-24 flex justify-between items-center px-12 bg-slate-200'>
            <div >
                <Link href={"/"} className='text-xl text-indigo-600 font-semibold'>
                    Wörterbuch
                </Link>
            </div>
            <div>

            </div>
            <MobileMenu />
        </div>
    )
}
