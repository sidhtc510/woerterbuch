'use client'
import React from 'react';
import { loadWords } from "./fetches";
import WordModal from './components/WordModal';
import SearchBar from './components/SearchBar';
import Link from 'next/link';

const MainWord = ({ letter, words }) => (
  <>
    <div className="mb-8">
      <h2 className='text-xl font-bold mb-4'>{letter}</h2>
      <div className="flex gap-5 flex-wrap">
        {words.map((wordObj, index) => (
          <div key={index} className={`w-fit pointer-events-auto rounded-md px-3 py-2 text-[0.8125rem] font-semibold leading-5  cursor-pointer  select-none ${wordObj.singular.nominativ.substr(0, 3) === 'der' ? 'bg-indigo-300' : wordObj.singular.nominativ.substr(0, 3) === 'die' ? 'bg-red-300' : 'bg-emerald-300'}`}>
            <WordModal wordObj={wordObj} />
          </div>
        ))}
      </div>
    </div>
  </>
);

export default async function Home() {
  const words = await loadWords();

  return (
    <>
      <div className='pb-40'>
        <Link href={'/addword'} className='w-fit pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 block'>Add Word</Link>
        {Object.entries(words).map(([letter, wordsArray]) => (
          (letter !== '_id' && wordsArray.length > 0) && (
            <>
              <MainWord key={letter} letter={letter} words={wordsArray} />
            </>
          )
        ))}
      </div>
      <SearchBar />
    </>
  );
}
