import aiHandler, { loadVerbs } from '@/app/fetchVerbs';
import { createAlphabet } from '@/app/helpers/functions';
import Link from 'next/link';
import React from 'react'

export default async function VerbsPage() {
    const verbs = await loadVerbs();
    const alphabet = await createAlphabet(verbs)

    // const res = await aiHandler("покупать");

    return (
        <div className='pb-40 bg-slate-200 min-h-[calc(100vh-96px)] '>
            <div className='alphabet_navigation bg-indigo-300 text-2xl flex gap-4 flex-wrap w-full top-0 p-4'>
                {alphabet.map((letter, index) => (
                    <a className='block' key={index} href={`#${letter}_ankor`}>
                        {letter}
                    </a>
                ))}
            </div>

            <div className="flex gap-5 flex-wrap mb-8 px-4 my-2 md:px-12">
                {verbs.map(({ _id, verb, translation }, index) => <Link href={`verbs/${_id}`} className='w-fit pointer-events-auto rounded-md px-3 py-2 text-[0.8125rem] font-semibold leading-5  cursor-pointer  select-none bg-sky-400' key={index}>
                    {verb} ({translation})
                </Link>)}
            </div>
        </div>
    )
}
