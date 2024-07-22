import DevelopedbySid from '@/app/components/DevelopedbySid';
import SearchBarVerb from '@/app/components/SearchBarVerb';
import VerbsMap from '@/app/components/VerbsMap';
import { loadVerbs } from '@/app/fetchVerbs';
import { createAlphabet } from '@/app/helpers/functions';

export default async function VerbsPage() {
    const verbs = await loadVerbs();
    const alphabet = await createAlphabet(verbs)

    return (
        <div className='pb-40 bg-slate-200 min-h-[calc(100dvh-96px)] '>
            <div className='alphabet_navigation bg-indigo-300 text-2xl flex gap-4 flex-wrap w-full top-0 p-4'>
                {alphabet.map((letter, index) => (
                    <a className='block' key={index} href={`#${letter}_ankor`}>
                        {letter}
                    </a>
                ))}
            </div>

            <VerbsMap {...{ verbs }} />

            <div className='fixed bottom-0 w-full'>
                <SearchBarVerb />
                <DevelopedbySid />
            </div>
        </div>
    )
}
