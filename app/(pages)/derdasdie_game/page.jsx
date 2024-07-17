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
    const [scoreState, setScoreState] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWordsNominative());
    }, [dispatch]);

    const { status, list } = useSelector(state => state.ddd_words);
    const score = useSelector(state => state.score);
    useEffect(() => {
        setScoreState(score);
    }, [score])

    useEffect(() => {
        if (status === 'ready' && list.length > 0) {
            setRandomWord(getRandomWord(list));
        }
    }, [status, list]);

    const handler_derdasdie_game = (artikle) => {
        if (randomWord.wordWithArtikle.startsWith(artikle)) {
            alert(`correct ${randomWord.wordWithArtikle}`);
            setRandomWord(getRandomWord(list));
            dispatch(addCorrect());
        } else {
            alert(`Wrong, correct is ${randomWord.wordWithArtikle}`);
            setRandomWord(getRandomWord(list));
            dispatch(addWrong());
        }
        dispatch(addWord(randomWord.wordWithArtikle))
    }


    return (
        <div>
            {status !== 'ready' ? <LoaderUI /> :

                <>
                    <div className='flex justify-center gap-3 text-lg font-bold items-center m-4'>
                        <SlLike className='text-green-600' />{scoreState.list.score.correct}  <SlDislike className='text-red-600' />{scoreState.list.score.wrong}
                    </div>
                    <div className='mx-auto my-4 text-4xl p-10 text-white bg-sky-400 rounded-lg flex justify-center align-middle w-fit shadow-lg'>
                        {randomWord.word}
                    </div>

                    <div className='flex justify-center gap-2'>
                        <p className='cursor-pointer px-4 py-6 border rounded-lg bg-indigo-300' onClick={() => handler_derdasdie_game('der')}>der</p>
                        <p className='cursor-pointer px-4 py-6 border rounded-lg bg-red-300' onClick={() => handler_derdasdie_game('die')}>die</p>
                        <p className='cursor-pointer px-4 py-6 border rounded-lg bg-emerald-300' onClick={() => handler_derdasdie_game('das')}>das</p>
                    </div>

                    {!!score.list.wordsWithArtikle.length && <div className='flex flex-col gap-1  m-4 p-10 bg-green-100 border-gray-300 rounded-2xl w-fit mx-auto'>
                        {score.list.wordsWithArtikle.map((el, index) => <p key={index}>{el}</p>)}
                    </div>}
                </>
            }
        </div>
    )
}