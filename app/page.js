import { loadWords } from "./fetches"

export default async function Home() {
  const words = await loadWords();
console.log(words.A);
  return (
    <div>
      Alphabet
    </div>
  )
}
