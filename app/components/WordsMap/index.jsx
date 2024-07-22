'use client'
import React, { useEffect } from 'react';
import Word from '../Word';
import SearchBar from '../SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { initializinState } from '@/app/store/slice/wordsSlice';

const MainWord = ({ letter, words }) => (
    <>
        <div className="mb-8 px-4 md:px-12">
            <h2 className='text-xl font-bold mb-4 px-12' id={`${letter}_ankor`}>{letter}</h2>
            <div className="flex gap-5 flex-wrap">
                {words.map((wordObj, index) => <Word key={index} wordObj={wordObj} />)}
            </div>
        </div>
    </>
);

export default function WordsMap({ words }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializinState(words))
    }, [words])

    const wordsRedux = useSelector(state => state.words);

    return (
        <>
            <div className='pb-40 bg-slate-200 min-h-[100dvh]'>
                <div className='alphabet_navigation bg-indigo-300 text-2xl flex gap-4 flex-wrap w-full top-0 p-4'>
                    {Object.entries(wordsRedux.list).map(([letter]) => (
                        (letter !== '_id') && (
                            <a className='block' key={letter} href={`#${letter}_ankor`}>
                                {letter}
                            </a>
                        )
                    ))}
                </div>

                {Object.entries(wordsRedux.list).map(([letter, wordsArray]) => (
                    (letter !== '_id' && wordsArray.length > 0) && (
                        <MainWord key={letter} letter={letter} words={wordsArray} />
                    )
                ))}
            </div>
            <SearchBar />
        </>
    )
}
