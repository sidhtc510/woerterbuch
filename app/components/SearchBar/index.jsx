'use client'
import { search } from '@/app/store/slice/wordsSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function SearchBar() {
    const dispatch = useDispatch();

    const handleSearch = (event) => {

        dispatch(search(event.target.value));
    };


    return (
        <div className=' fixed w-full bg-indigo-300 z-10 bottom-0 border border-indigo-600 p-5'>
            <input type="text" className='w-full rounded-lg p-4 text-xxl text-indigo-900 font-bold' placeholder='Nachschlagen das Wort' onChange={handleSearch} />
        </div>
    )
}
