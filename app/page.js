import React from 'react';
import { loadWords } from "./fetches";
import Word from './components/Word';
import SearchBar from './components/SearchBar';
import Link from 'next/link';

const MainWord = ({ letter, words }) => (
  <>
    <div className="mb-8">
      <h2 className='text-xl font-bold mb-4' id={`${letter}_ankor`}>{letter}</h2>
      <div className="flex gap-5 flex-wrap">
        {words.map((wordObj, index) => <Word key={index} wordObj={wordObj} />)}
      </div>
    </div>
  </>
);

export default async function Home() {
  const words = await loadWords();

  return (
    <>
      <div className='pb-40 bg-slate-200'>
        <div className='alphabet_navigation bg-indigo-300 text-2xl flex gap-4 flex-wrap w-full top-0 p-4'>
          {Object.entries(words).map(([letter]) => (
            (letter !== '_id') && (
              <a className='block' key={letter} href={`#${letter}_ankor`}>
                {letter}
              </a>
            )
          ))}
        </div>

        <Link href={'/addword'} className='w-fit pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 block'>Add Word</Link>

        {Object.entries(words).map(([letter, wordsArray]) => (
          (letter !== '_id' && wordsArray.length > 0) && (
            <MainWord key={letter} letter={letter} words={wordsArray} />
          )
        ))}
      </div>
      <SearchBar />
    </>
  );
}
