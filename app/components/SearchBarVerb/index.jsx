"use client"
import aiHandlerVerb from '@/app/fetchVerbs';
import { searchVerb } from '@/app/store/slice/verbSlice';
import React, { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import VerbTable from '../VerbTable';


export default function SearchBarVerb() {
    const dispatch = useDispatch();

    const [verb, setVerb] = useState("");
    const [story, setStory] = useState("");
    const [loading, setLoading] = useState(false);

    const handleClose = () => {
        setStory(false);
        setVerb("");
        dispatch(searchVerb(""));
    };

    const handleSearch = (event) => {
        setVerb(event.target.value);
        dispatch(searchVerb(event.target.value));
    };

    const generateStory = async () => {
        if (!verb) {
            return;
        }
        setLoading(true);
        try {
            const res = await aiHandlerVerb(verb.trim());
            // console.log(res);
            
            const handledRes = await JSON.parse(res)
            // console.log(handledRes);
            setStory(handledRes)

        } catch (error) {
            console.error("Error generating story:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=' fixed w-full bg-indigo-300 z-10 bottom-8 md:p-2 flex items-center gap-3'>
            <input type="text" className='w-full rounded-md p-2 text-xxl text-indigo-800 my-3 ml-3 outline-none' placeholder='Nachschlagen das Verb' value={verb} onChange={handleSearch} />

            <button onClick={generateStory} disabled={loading} className="w-fit pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 block">
                {loading ? <p className="text-gray-400">Generating...</p> : (<p className="flex items-center gap-1">Generate <BsStars className="text-2xl text-orange-600" /></p>)}
            </button>

            {story && (
                <>
                    <VerbTable verbData={story} handleCloseModal={handleClose} newWord={true} />
                </>
            )}
        </div>
    )
}
