"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function BackButton() {
    const router = useRouter();

    const goBack = () => {
        router.back();
      };
  return (
    <div onClick={goBack} className='bg-red-400 rounded px-3 py-1 cursor-pointer w-fit m-4'>Previous page</div>
  )
}
