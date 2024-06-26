'use client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { filterByArticle } from '@/app/store/slice/wordsSlice'

export default function ArtikelFilter() {
    const dispatch = useDispatch()
    return (
        <div className='flex justify-center gap-3 flex-col fixed right-0 top-[40vh]'>
            <div className='rounded-lg p-2 text-sm text-white bg-indigo-300 cursor-pointer select-none shadow-lg' onClick={() => dispatch(filterByArticle('der'))}> der</div>
            <div className='rounded-lg p-2 text-sm text-white bg-red-300 cursor-pointer select-none shadow-lg' onClick={() => dispatch(filterByArticle('die'))}> die</div>
            <div className='rounded-lg p-2 text-sm text-white bg-emerald-300 cursor-pointer select-none shadow-lg' onClick={() => dispatch(filterByArticle('das'))}> das</div>
        </div>
    )
}
