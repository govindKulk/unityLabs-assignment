'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import {BiArrowBack} from 'react-icons/bi'

const BreadCrumbs = () => {
  const router = useRouter();
  const pathName = usePathname();
  const paths = pathName.split('/');
  return (
    <div className='fixed top-0   max-w-screen-lg w-full py-2 px-4 bg-black/20 text-white cursor-pointer  '>
      <span onClick={() => router.back()}>

    <BiArrowBack size={32} />
      </span>
    </div>
  )
}

export default BreadCrumbs
