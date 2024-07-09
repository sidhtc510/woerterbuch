import React from 'react';

const VerbTable = ({verbData}) => {
    return (
        <div className="p-4">
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
        </div>
    );
};

export default VerbTable;