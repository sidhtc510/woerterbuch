"use client"
import React, { useEffect } from 'react'
import { initializinState } from '@/app/store/slice/verbSlice';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

export default function VerbsMap({ verbs }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializinState(verbs))
    }, [verbs])

    const verbsRedux = useSelector(state => state.verbs);


    return (
        <div className="flex gap-5 flex-wrap mb-8 px-4 my-2 md:px-12">
            {verbsRedux.list.map(({ _id, verb, translation }, index) => <Link href={`verbs/${_id}`} className='w-fit pointer-events-auto rounded-md px-3 py-2 text-[0.8125rem] font-semibold leading-5  cursor-pointer  select-none bg-sky-400' key={index}>
                {verb} ({translation})
            </Link>)}
        </div>
    )
}
