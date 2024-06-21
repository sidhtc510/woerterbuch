
'use client';

import { useState } from 'react';
import WordModal from '../WordModal';

export default function Word({ wordObj }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div onClick={handleOpenModal} className={`w-fit pointer-events-auto rounded-md px-3 py-2 text-[0.8125rem] font-semibold leading-5  cursor-pointer  select-none ${wordObj.singular.nominativ.substr(0, 3) === 'der' ? 'bg-indigo-300' : wordObj.singular.nominativ.substr(0, 3) === 'die' ? 'bg-red-300' : 'bg-emerald-300'}`}>
                {`${wordObj.word} (${wordObj.wordRu})`}
            </div>

            {isModalOpen && <WordModal {...{wordObj, handleCloseModal }} />}
        </>
    );
}