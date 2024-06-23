'use client'
import { fetchWords } from '@/app/store/slice/wordsSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function TestComp() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchWords());
    }, [dispatch]);


    const words = useSelector((state) => state.words.list)
    console.log('words_redux', words);
    return (
        <div>index</div>
    )
}
