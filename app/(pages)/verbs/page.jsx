
import { loadVerbs } from '@/app/fetches';
import Link from 'next/link';
import React from 'react'

export default async function VerbsPage() {
    const verbs = await loadVerbs();

    const alphabet = [];

    // Проходимся по каждому объекту в массиве verbs
    verbs.forEach(({ verb }) => {
        // Получаем первую букву глагола и переводим ее в верхний регистр
        const firstLetter = verb.charAt(0).toUpperCase();
        // Если такой буквы еще нет в массиве firstLetters, добавляем ее
        if (!alphabet.includes(firstLetter)) {
            alphabet.push(firstLetter);
        }
    });
    // Сортируем массив firstLetters в алфавитном порядке
    alphabet.sort();

    return (
        <div className='pb-40 bg-slate-200 min-h-[calc(100vh-96px)] '>
            {/* <div className="mb-8 px-4 md:px-12"> */}

                <div className='alphabet_navigation bg-indigo-300 text-2xl flex gap-4 flex-wrap w-full top-0 p-4'>
                    {alphabet.map((letter, index) => (

                        <a className='block' key={index} href={`#${letter}_ankor`}>
                            {letter}
                        </a>
                    ))}
                </div>

                <div className="flex gap-5 flex-wrap mb-8 px-4 my-2 md:px-12">
                    {verbs.map(({ _id, verb, translation }, index) => <Link href={_id} className='w-fit pointer-events-auto rounded-md px-3 py-2 text-[0.8125rem] font-semibold leading-5  cursor-pointer  select-none bg-indigo-300' key={index}>{verb} ({translation})</Link>)}
                </div>
            {/* </div> */}
        </div>
    )
}
