'use client'
import React, { useState } from 'react'

export default function SearchBar() {
    const [targetWord, setTargetWord] = useState('');

    return (
        <div className=' fixed w-full bg-indigo-300 z-10 bottom-0 border border-indigo-600 p-5'>
            <input type="text" className='w-full rounded-lg p-4 text-xxl text-indigo-900 font-bold' value={targetWord} placeholder='Nachschlagen das Wort' onChange={(e) => setTargetWord(e.target.value)} />
        </div>
    )
}
