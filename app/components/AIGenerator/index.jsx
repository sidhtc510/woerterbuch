'use client'
import React, { useState } from "react";
import aiHandler from "@/app/fetches";
import WordModal from "../WordModal";
import { PiMagicWand } from "react-icons/pi";

export default function Home() {
    const [word, setWord] = useState("");
    const [story, setStory] = useState("");
    const [loading, setLoading] = useState(false);

    const handleClose = () => {
        setStory(false);
        setWord("");
    };


    const handleWordChange = (event) => {
        setWord(event.target.value);
    };

    const generateStory = async () => {
        if (!word) {
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
        <div className="flex justify-center items-center h-[calc(100vh-96px)]">
            <div>
                <input
                    className='rounded-lg p-4 text-xxl text-indigo-900 font-bold border'
                    type="text"
                    value={word}
                    onChange={handleWordChange}
                    placeholder="Enter a single word"
                />
            </div>
            <button onClick={generateStory} disabled={loading} className="w-fit pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 block">
                {loading ? <p className=" text-gray-400">Generating...</p> : (<p className="flex items-center gap-1">Generate word <PiMagicWand className="text-orange-600 text-lg" /></p>)}
            </button>

            {story && <WordModal wordObj={story} handleCloseModal={handleClose} newWord={true} />}
        </div>
    );
}