import React from 'react'
import s from './s.module.css'

export default function WordModal({wordObj, handleCloseModal}) {
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
                            <td className='border border-indigo-800 p-2'>{wordObj.singular.nominativ}</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.plural.nominativ}</td>
                        </tr>
                        <tr className='border border-indigo-800'>
                            <td className='text-sm bg-indigo-700 p-2'>Genitiv</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.singular.genitiv}</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.plural.genitiv}</td>
                        </tr>
                        <tr className='border border-indigo-800'>
                            <td className='text-sm bg-indigo-700 p-2'>Dativ</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.singular.dativ}</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.plural.dativ}</td>
                        </tr>
                        <tr className='border border-indigo-800'>
                            <td className='text-sm bg-indigo-700 p-2'>Akkusativ</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.singular.akkusativ}</td>
                            <td className='border border-indigo-800 p-2'>{wordObj.plural.akkusativ}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
