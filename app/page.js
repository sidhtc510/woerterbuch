import React from 'react';
import { loadWords } from "./fetches";
import Word from './components/Word';
import SearchBar from './components/SearchBar';

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
