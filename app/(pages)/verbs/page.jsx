
import { loadVerbs } from '@/app/fetches';
import Link from 'next/link';
import React from 'react'

export default async function VerbsPage() {
    const verbs = await loadVerbs();

    return (
        <div className="mb-8 px-4 md:px-12">

            <div className="flex gap-5 flex-wrap">
                {verbs.map(({ _id, verb, translation }, index) => <Link href={_id} className='w-fit pointer-events-auto rounded-md px-3 py-2 text-[0.8125rem] font-semibold leading-5  cursor-pointer  select-none bg-indigo-300' key={index}>{verb} ({translation})</Link>)}
            </div>
        </div>
    )
}
