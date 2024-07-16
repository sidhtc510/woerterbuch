'use client'
import LoaderUI from '@/app/components/LoaderUI'
import { getRandomWord } from '@/app/helpers/functions'
import { fetchWordsNominative } from '@/app/store/slice/derdasdie'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function DerDasDieGame() {
    const [randomWord, setRandomWord] = useState({ word: '', wordWithArtikle: '' });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWordsNominative());
    }, [dispatch]);

    const { status, list } = useSelector(state => state.ddd_words);



    useEffect(() => {
        if (status === 'ready' && list.length > 0) {
            setRandomWord(getRandomWord(list));
        }
    }, [status, list]);

    const handler = (artikle) => {

        if (randomWord.wordWithArtikle.startsWith(artikle)) {
            alert(`correct ${randomWord.wordWithArtikle}`);
            setRandomWord(getRandomWord(list));
        } else {
            alert(`Wrong, correct is ${randomWord.wordWithArtikle}`);
            setRandomWord(getRandomWord(list));
        }
    }

    return (
        <div>
            {status !== 'ready' ? <LoaderUI /> :
                <>
                    <div className='mx-auto my-4 text-4xl p-10 text-white bg-sky-400 rounded-lg flex justify-center align-middle w-fit shadow-lg'>
                        {randomWord.word}

                    </div>

                    <div className='flex justify-center gap-2'>
                        <p className='cursor-pointer px-4 py-6 border rounded-lg bg-indigo-300' onClick={() => handler('der')}>der</p>
                        <p className='cursor-pointer px-4 py-6 border rounded-lg bg-red-300' onClick={() => handler('die')}>die</p>
                        <p className='cursor-pointer px-4 py-6 border rounded-lg bg-emerald-300' onClick={() => handler('das')}>das</p>
                    </div>
                </>
            }
        </div>
    )
}