"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { MdOutlineArrowLeft } from "react-icons/md";

export default function BackButton() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div onClick={goBack} className='bg-red-300 rounded px-3 py-1 cursor-pointer w-fit m-4 flex items-center'><MdOutlineArrowLeft className='text-2xl' />Previous page</div>
  )
}
