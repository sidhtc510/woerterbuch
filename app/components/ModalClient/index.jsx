// components/ModalClient.js
'use client';

import { useState } from 'react';
import WordModal from '../WordModal';

export default function ModalClient({ wordObj }) {
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
                {`${wordObj.word} ( ${wordObj?.wordRu})`}
            </div>
            <WordModal wordObj={wordObj} isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
}