
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
                {`${wordObj.word} (${wordObj?.wordRu})`}
            </div>

            {isModalOpen && (
                <div className="modal" onClick={handleCloseModal}>
                    {console.log(wordObj)}
                    <div className="modal-content" style={{ color: "black" }}>
                        <span className="close" onClick={handleCloseModal}>&times;</span>

                        <table className='table-auto border border-slate-400 border-separate border-spacing-2'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Singular</th>
                                    <th>Plural</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nominativ</td>
                                    <td>{wordObj.singular.nominativ}</td>
                                    <td>{wordObj.plural.nominativ}</td>
                                </tr>
                                <tr>
                                    <td>Genitiv</td>
                                    <td>{wordObj.singular.genitiv}</td>
                                    <td>{wordObj.plural.genitiv}</td>
                                </tr>
                                <tr>
                                    <td>Dativ</td>
                                    <td>{wordObj.singular.dativ}</td>
                                    <td>{wordObj.plural.dativ}</td>
                                </tr>
                                <tr>
                                    <td>Akkusativ</td>
                                    <td>{wordObj.singular.akkusativ}</td>
                                    <td>{wordObj.plural.akkusativ}</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            )}
        </>
    );
}