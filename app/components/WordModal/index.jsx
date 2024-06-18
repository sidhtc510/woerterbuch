
'use client';

import { useState } from 'react';
// import WordModal from '../components/WordModal';

export default function WordModal({ wordObj }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div onClick={handleOpenModal}>
                {`${wordObj.word} (${wordObj.wordRu})`}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-10 overflow-auto bg-black bg-opacity-40 backdrop-blur-sm flex" onClick={handleCloseModal}>
                    <div className="bg-indigo-600 m-auto border border-gray-500 w-4/5 rounded-lg"> {/* my-16 p-5 */}
                        <h2 className='text-xl p-5'>{`${wordObj.word} (${wordObj.wordRu})`}</h2>
                        {/* <table className='table-auto border border-slate-400 border-separate border-spacing-2'> */}
                        <table className='table-auto w-full border-collapse'>
                            <thead>
                                <tr className='w-full'>
                                    <th className='text-sm pb-5 bg-indigo-800 border border-indigo-900'></th>
                                    <th className='text-sm pb-5 bg-indigo-800 border border-indigo-900'>Singular</th>
                                    <th className='text-sm pb-5 bg-indigo-800 border border-indigo-900'>Plural</th>
                                </tr>
                            </thead>
                            <tbody className='border border-indigo-900'>
                                <tr className='border border-indigo-900'>
                                    <td className='text-sm bg-indigo-800 p-2'>Nominativ</td>
                                    <td className='border border-indigo-900 p-2'>{wordObj.singular.nominativ}</td>
                                    <td className='border border-indigo-900 p-2'>{wordObj.plural.nominativ}</td>
                                </tr>
                                <tr className='border border-indigo-900'>
                                    <td className='text-sm bg-indigo-800 p-2'>Genitiv</td>
                                    <td className='border border-indigo-900 p-2'>{wordObj.singular.genitiv}</td>
                                    <td className='border border-indigo-900 p-2'>{wordObj.plural.genitiv}</td>
                                </tr>
                                <tr className='border border-indigo-900'>
                                    <td className='text-sm bg-indigo-800 p-2'>Dativ</td>
                                    <td className='border border-indigo-900 p-2'>{wordObj.singular.dativ}</td>
                                    <td className='border border-indigo-900 p-2'>{wordObj.plural.dativ}</td>
                                </tr>
                                <tr className='border border-indigo-900'>
                                    <td className='text-sm bg-indigo-800 p-2'>Akkusativ</td>
                                    <td className='border border-indigo-900 p-2'>{wordObj.singular.akkusativ}</td>
                                    <td className='border border-indigo-900 p-2'>{wordObj.plural.akkusativ}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}