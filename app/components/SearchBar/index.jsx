'use client'
import { search } from '@/app/store/slice/wordsSlice';
import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { PiInfinityThin, PiMagicWand } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import aiHandler from '@/app/fetches';
import WordModal from '../WordModal';


export default function SearchBar() {
    const dispatch = useDispatch();

    const [word, setWord] = useState("");
    const [story, setStory] = useState("");
    const [loading, setLoading] = useState(false);


    const handleClose = () => {
        setStory(false);
        setWord("");
        dispatch(search(""));
    };

    const handleSearch = (event) => {
        setWord(event.target.value);
        dispatch(search(event.target.value));
    };

    const generateStory = async () => {
        if (!word) { //|| word.split(" ").length > 1
            // Display an error message or prevent the button from being clicked
            return;
        }
        setLoading(true);
        try {
            const res = await aiHandler(word.trim());

            const handledRes = await JSON.parse(res)
            setStory(handledRes)

        } catch (error) {
            console.error("Error generating story:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className=' fixed w-full bg-indigo-300 z-10 bottom-8 md:p-2 flex items-center gap-3'>
                <input type="text" className='w-full rounded-md p-2 text-xxl text-indigo-800 my-3 ml-3 outline-none' placeholder='Nachschlagen das Wort' value={word} onChange={handleSearch} />

                <button onClick={generateStory} disabled={loading} className="w-fit pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 block">
                    {loading ? <p className="text-gray-400">Generating...</p> : (<p className="flex items-center gap-1">Generate <BsStars className="text-orange-600 text-2xl" /></p>)}
                </button>

                {story && (
                    <>
                        <WordModal wordObj={story} handleCloseModal={handleClose} newWord={true} />
                        
                    </>
                )}
            </div>
            <div className='fixed bottom-0 w-full text-sm font-thin bg-slate-200 text-gray-500 flex align-middle justify-center p-2'>
                Developed by
                <Link className='text-gray-500 underline cursor-pointer pl-1 flex align-bottom relative' href='https://www.linkedin.com/in/sidhtc510/'> a$id</Link>
            </div>
        </>
    )
}
