import BackButton from '@/app/components/BackButton';
import VerbTable from '@/app/components/VerbTable';
import { loadVerb } from '@/app/fetchVerbs'
import React from 'react'

export default async function VerbPage({ params }) {
    const verb = await loadVerb(params);

    return (
        <>
            <BackButton />
            <VerbTable verbData={verb} />
        </>

    )
}
