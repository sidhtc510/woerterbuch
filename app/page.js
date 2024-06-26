import React from 'react';
import { loadWords } from "./fetches";
import WordsMap from './components/WordsMap';
import ArtikelFilter from './components/ArtikelFilter';

export default async function Home() {
  const words = await loadWords(); //loaded on server side

  return (
    <>
      <ArtikelFilter />
      <WordsMap {...{ words }} />
    </>
  )
}
