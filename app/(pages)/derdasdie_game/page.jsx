'use client'
import LoaderUI from '@/app/components/LoaderUI'
import { getRandomWord } from '@/app/helpers/functions'
import { fetchWordsNominative } from '@/app/store/slice/derdasdie'
import { addCorrect, addWord, addWrong } from '@/app/store/slice/derdasdie_score'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SlDislike, SlLike } from "react-icons/sl";

export default function DerDasDieGame() {
    const [randomWord, setRandomWord] = useState({ word: '', wordWithArtikle: '' });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWordsNominative());
    }, [dispatch]);

    const { status, list } = useSelector(state => state.ddd_words);
    const score = useSelector(state => state.score);

    useEffect(() => {
        if (status === 'ready' && list.length > 0) {
            setRandomWord(getRandomWord(list));
        }
    }, [status, list]);

    const handler_derdasdie_game = (artikel) => {
        const isCorrect = randomWord.wordWithArtikle.startsWith(artikel);
        alert(isCorrect ? `✅ Correct "${randomWord.wordWithArtikle}"` : `❌ Wrong, correct is "${randomWord.wordWithArtikle}"`);
        setRandomWord(getRandomWord(list));
        dispatch(isCorrect ? addCorrect() : addWrong());
        dispatch(addWord(randomWord.wordWithArtikle));
    }

    return (
        <div>
            {status !== 'ready' ? <LoaderUI /> :
                (
                    <div>
                        {status !== 'ready' ? <LoaderUI /> : (
                            <>
                                <div className='flex justify-center gap-3 text-lg font-bold items-center m-4'>
                                    <SlLike className='text-green-600' /> {score.list.score.correct}  <SlDislike className='text-red-600' /> {score.list.score.wrong}
                                </div>
                                <div className='mx-auto my-4 text-4xl p-10 text-white bg-sky-400 rounded-lg flex justify-center align-middle w-fit shadow-lg'>
                                    {randomWord.word}
                                </div>
                                <div className='flex justify-center gap-2'>
                                    {['der', 'die', 'das'].map(artikel => (
                                        <p key={artikel} className={`cursor-pointer px-4 py-6 border rounded-lg ${artikel === 'der' ? 'bg-indigo-300' : artikel === 'die' ? 'bg-red-300' : 'bg-emerald-300'}`} onClick={() => handler_derdasdie_game(artikel)}>{artikel}</p>
                                    ))}
                                </div>
                                {score.list.wordsWithArtikle.length > 0 && (
                                    <div className='flex flex-col gap-1 m-4 p-10 bg-green-100 border-gray-300 rounded-2xl w-fit mx-auto'>
                                        {score.list.wordsWithArtikle.map((el, index) => <p key={index}>{el}</p>)}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                )
            }
        </div>
    )
}