'use client'
import { search } from '@/app/store/slice/wordsSlice';
import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { PiInfinityThin } from "react-icons/pi";

export default function SearchBar() {
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(search(event.target.value));
    };

    return (
        <>
            <div className=' fixed w-full bg-indigo-300 z-10 bottom-8 border border-indigo-600 p-5'>
                <input type="text" className='w-full rounded-lg p-4 text-xxl text-indigo-900 font-bold' placeholder='Nachschlagen das Wort' onChange={handleSearch} />
            </div>
            <div className='fixed bottom-0 w-full text-sm font-thin bg-gray-300 text-gray-500 flex align-middle justify-center p-2'>
                Developed by
                <Link className='text-gray-500 underline cursor-pointer font-normal pl-1 flex align-bottom relative' href='https://www.linkedin.com/in/sidhtc510/'> a$id
                </Link>
            </div>
        </>
    )
}
