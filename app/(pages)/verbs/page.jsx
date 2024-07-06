import React from 'react';

const VerbTable = () => {

    const verbData = {
        "verb": "machen",
        "translation": "делать",
        "conjugation": {
            "present": {
                "ich": "mache",
                "du": "machst",
                "er/sie/es": "macht",
                "wir": "machen",
                "ihr": "macht",
                "sie/Sie": "machen"
            },
            "past": {
                "ich": "machte",
                "du": "machtest",
                "er/sie/es": "machte",
                "wir": "machten",
                "ihr": "machtet",
                "sie/Sie": "machten"
            },
            "future": {
                "ich": "werde machen",
                "du": "wirst machen",
                "er/sie/es": "wird machen",
                "wir": "werden machen",
                "ihr": "werdet machen",
                "sie/Sie": "werden machen"
            },
            "perfect": {
                "ich": "habe gemacht",
                "du": "hast gemacht",
                "er/sie/es": "hat gemacht",
                "wir": "haben gemacht",
                "ihr": "habt gemacht",
                "sie/Sie": "haben gemacht"
            },
            "pluperfect": {
                "ich": "hatte gemacht",
                "du": "hattest gemacht",
                "er/sie/es": "hatte gemacht",
                "wir": "hatten gemacht",
                "ihr": "hattet gemacht",
                "sie/Sie": "hatten gemacht"
            },
            "future_perfect": {
                "ich": "werde gemacht haben",
                "du": "wirst gemacht haben",
                "er/sie/es": "wird gemacht haben",
                "wir": "werden gemacht haben",
                "ihr": "werdet gemacht haben",
                "sie/Sie": "werden gemacht haben"
            }
        },
        "examples": [
            "Ich mache meine Hausaufgaben.",
            "Er hat das Auto gemacht."
        ],
        "notes": "Глагол 'machen' используется в широком спектре значений, включая 'создавать', 'делать' и 'выполнять'."
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">{verbData.verb} - {verbData.translation}</h1>
            <table className='table-auto w-full border-collapse'>
                <thead>
                    <tr className='w-full'>
                        <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'></th>
                        <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Present</th>
                        <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Past</th>
                        <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Future</th>
                        <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Perfect</th>
                        <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Pluperfect</th>
                        <th className='text-sm pb-5 bg-indigo-700 border border-indigo-800'>Future Perfect</th>
                    </tr>
                </thead>
                <tbody className='border border-indigo-800'>
                    {Object.keys(verbData.conjugation.present).map(pronoun => (
                        <tr className='border border-indigo-800' key={pronoun}>
                            <td className='text-sm bg-indigo-700 p-2'>{pronoun}</td>
                            <td className='border border-indigo-800 p-2'>{verbData.conjugation.present[pronoun]}</td>
                            <td className='border border-indigo-800 p-2'>{verbData.conjugation.past[pronoun]}</td>
                            <td className='border border-indigo-800 p-2'>{verbData.conjugation.future[pronoun]}</td>
                            <td className='border border-indigo-800 p-2'>{verbData.conjugation.perfect[pronoun]}</td>
                            <td className='border border-indigo-800 p-2'>{verbData.conjugation.pluperfect[pronoun]}</td>
                            <td className='border border-indigo-800 p-2'>{verbData.conjugation.future_perfect[pronoun]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
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