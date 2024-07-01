'use client'
import React, { useState } from 'react'
import s from './s.module.css'
import { useRouter } from 'next/navigation';

export default function WordModal({ wordObj, handleCloseModal, newWord = false }) {


    const router = useRouter();
    const [fetching, setFetching] = useState(false);

    const handleAddNewWord = async () => {
        if (window.confirm("Do you really want to Add word in to DB?")) {

            setFetching(true);
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/words', {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(wordObj)
                })

                if (!res.ok) {
                    throw new Error('no res ok')
                }
                setFetching(false);
                router.push("/");
                return res.json()
                
            } catch (error) {
                console.log('error AddWord in page', error);
            }
            router.refresh();
        }
    }


    return (
        <div className={`${s.modalOverlay} inset-0 z-20 overflow-auto flex justify-center items-center fixed w-full h-full`} onClick={handleCloseModal}>
            <div className="bg-indigo-600 m-auto border border-indigo-800 w-5/5 rounded-lg shadow text-white"> {/* my-16 p-5 */}
                <h2 className='text-xl p-5'>{`${wordObj.word} (${wordObj.wordRu})`}</h2>
                <table className='table-auto w-full border-collapse'>
                    <thead>
                        <tr className='w-full'>
                            <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'></th>
                            <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Singular</th>
                            <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Plural</th>
                        </tr>
                    </thead>
                    <tbody className='border border-indigo-800'>
                        <tr className='border border-indigo-800'>
                            <td className='text-sm bg-indigo-700 p-2'>Nominativ</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.singular?.nominativ}</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.plural?.nominativ}</td>
                        </tr>
                        <tr className='border border-indigo-800'>
                            <td className='text-sm bg-indigo-700 p-2'>Genitiv</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.singular?.genitiv}</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.plural?.genitiv}</td>
                        </tr>
                        <tr className='border border-indigo-800'>
                            <td className='text-sm bg-indigo-700 p-2'>Dativ</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.singular?.dativ}</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.plural?.dativ}</td>
                        </tr>
                        <tr className='border border-indigo-800'>
                            <td className='text-sm bg-indigo-700 p-2'>Akkusativ</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.singular?.akkusativ}</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.plural?.akkusativ}</td>
                        </tr>
                    </tbody>
                </table>
                {newWord && (<button onClick={handleAddNewWord} disabled={fetching} className="w-fit pointer-events-auto rounded-md bg-red-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 block">
                    Add Word to DB
                </button>)}
            </div>
        </div>
    )
}
