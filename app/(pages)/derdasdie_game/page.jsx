'use client'
import LoaderUI from '@/app/components/LoaderUI'
import { fetchWordsNominative } from '@/app/store/slice/derdasdie'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function DerDasDieGame() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchWordsNominative())
    }, [])


    const { status, list } = useSelector(state => state.ddd_words)


    return (
        <div>
            {status !== 'ready' ? <LoaderUI /> : 
                 list.map(el => <p>{el}</p>) 
            }
        </div>
    )
}
