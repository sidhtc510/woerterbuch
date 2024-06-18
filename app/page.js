import React from 'react';
import { loadWords } from "./fetches"
import WordModal from './components/WordModal';
import ModalClient from './components/ModalClient';


const MainWord = ({ letter, words }) => (
  <div className="mb-8">
    <h2 className='text-xl font-bold mb-4'>{letter}</h2>
    <div className='flex gap-5'>
      {words.map((wordObj, index) => (
        <div key={index} className="w-fit pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer">
          {/* <ModalClient />{`${wordObj.word} ( ${wordObj?.wordRu})`} </ModalClient> */}
          <ModalClient wordObj={wordObj} />
          {/* <div className="singular">
          <h4>Singular</h4>
          <p>Nominativ: {wordObj.singular.nominativ}</p>
          <p>Genitiv: {wordObj.singular.genitiv}</p>
          <p>Dativ: {wordObj.singular.dativ}</p>
          <p>Akkusativ: {wordObj.singular.akkusativ}</p>
          </div>
          <div className="plural">
          <h4>Plural</h4>
          <p>Nominativ: {wordObj.plural.nominativ}</p>
          <p>Genitiv: {wordObj.plural.genitiv}</p>
          <p>Dativ: {wordObj.plural.dativ}</p>
          <p>Akkusativ: {wordObj.plural.akkusativ}</p>
          </div> */}
        </div>
      ))}
    </div>
  </div>
);


export default async function Home() {
  const words = await loadWords();
  return (
    <div>
      {Object.entries(words).map(([letter, wordsArray]) => (
        (letter !== '_id' && wordsArray.length > 0) && (
          <MainWord key={letter} letter={letter} words={wordsArray} />
        )
      ))}
    </div>
  );
}
