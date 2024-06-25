import React from 'react';
import { loadWords } from "./fetches";
import WordsMap from './components/WordsMap';

export default async function Home() {
  const words = await loadWords(); //loaded on server side

  return <WordsMap {...{words}} />
}
