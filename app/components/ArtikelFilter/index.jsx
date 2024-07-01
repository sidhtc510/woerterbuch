'use client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { filterByArticle } from '@/app/store/slice/wordsSlice'

export default function ArtikelFilter() {
    const dispatch = useDispatch()
    return (
        <div className='flex justify-center gap-3 flex-col fixed right-0 top-[40vh]  bg-white/80 p-2 pl-2 pr-1 rounded-l-xl border border-gray-300'>
            <div className='rounded-lg p-2 text-sm text-black bg-indigo-300 cursor-pointer select-none shadow-lg' onClick={() => dispatch(filterByArticle('der'))}> der</div>
            <div className='rounded-lg p-2 text-sm text-black bg-red-300 cursor-pointer select-none shadow-lg' onClick={() => dispatch(filterByArticle('die'))}> die</div>
            <div className='rounded-lg p-2 text-sm text-black bg-emerald-300 cursor-pointer select-none shadow-lg' onClick={() => dispatch(filterByArticle('das'))}> das</div>
        </div>
    )
}
