"use client"
import React, { useState } from 'react';
import s from './s.module.css'
import { useRouter } from 'next/navigation';

const VerbTable = ({ verbData, handleCloseModal = false, newWord = "" }) => {

    const router = useRouter();
    const [fetching, setFetching] = useState(false);

    const handleAddNewVerb = async () => {
        if (window.confirm("Do you really want to Add verb in to DB?")) {

            setFetching(true);
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/verbs', {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(verbData)
                })

                if (!res.ok) {
                    throw new Error('no res ok')
                }
                setFetching(false);
                // router.push("/");
                return res.json()

            } catch (error) {
                console.log('error verbTable Adding in page', error);
            }
            router.refresh();
        }
    }

    return (
        <div className={newWord && `${s.modalOverlay} inset-0 z-20 overflow-auto flex justify-center items-center fixed w-full h-full`} onClick={newWord && handleCloseModal}>
            <div className={newWord ? 'fixed top-0' : 'p-4'}>
                <h1 className="text-2xl mb-4">{verbData.verb} - {verbData.translation}</h1>
                <div className="overflow-x-auto">
                    <table className='table-auto w-full border-collapse text-white'>
                        <thead>
                            <tr className='w-full'>
                                <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800 sticky left-0 z-10'></th>
                                <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Present</th>
                                <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Past</th>
                                <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Future</th>
                                {/* <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Perfect</th> */}
                                {/* <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Pluperfect</th> */}
                                {/* <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Future Perfect</th> */}
                            </tr>
                        </thead>
                        <tbody className='border border-indigo-800'>
                            {Object.keys(verbData.conjugation.present).map(pronoun => (
                                <tr className='border border-indigo-800' key={pronoun}>
                                    <td className='text-sm bg-indigo-700 p-2 sticky left-0 z-10'>{pronoun}</td>
                                    <td className='border bg-indigo-500 border-indigo-800 p-2'>{verbData.conjugation.present[pronoun]}</td>
                                    <td className='border bg-indigo-500 border-indigo-800 p-2'>{verbData.conjugation.past[pronoun]}</td>
                                    <td className='border bg-indigo-500 border-indigo-800 p-2'>{verbData.conjugation.future[pronoun]}</td>
                                    {/* <td className='border bg-indigo-500 border-indigo-800 p-2'>{verbData.conjugation.perfect[pronoun]}</td> */}
                                    {/* <td className='border bg-indigo-500 border-indigo-800 p-2'>{verbData.conjugation.pluperfect[pronoun]}</td> */}
                                    {/* <td className='border bg-indigo-500 border-indigo-800 p-2'>{verbData.conjugation.future_perfect[pronoun]}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h2 className="text-xl mt-6 mb-2">Examples</h2>
                <ul className="list-disc pl-5">
                    {verbData.examples.map((example, index) => (
                        <li key={index}>{example}</li>
                    ))}
                </ul>
                {verbData.notes && (
                    <div className="mt-6">
                        <h2 className="text-xl mb-2">Notes</h2>
                        <p>{verbData.notes}</p>
                    </div>
                )}

                {newWord && (<button onClick={handleAddNewVerb} disabled={fetching} className="w-fit pointer-events-auto rounded-md bg-red-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 block">
                    Add Verb to DB
                </button>)}
            </div>
        </div>
    );
};

export default VerbTable;