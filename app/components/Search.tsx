'use client'

import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';

interface SearchProps {
    handleOnSubmit: (query: string) => void;
    onChange: (query: string) => void,
    disabled: boolean;
}
const Search: React.FC<SearchProps> = ({
    handleOnSubmit,
    onChange,
    disabled
}) => {

    const [query, setQuery] = useState('')
  return (
    <div className='flex w-full  '>
        <input className="w-[80%] rounded-l-lg border-none outline-none shadow-md  p-2 text-lg " type="text" value={query} onChange={(e) => {
          setQuery(e.target.value)
          onChange(e.target.value);
        } }  />
        <button disabled={disabled} className='w-[20%] outline-none border-none  bg-amber-600 shadow-md text-white text-lg p-2 flex justify-center items-center rounded-r-lg disabled:bg-amber-400 ' onClick={() => handleOnSubmit(query)}> 
        {disabled ? <ClipLoader size={25}/> : "Search" }
         </button>
      
    </div>
  )
}

export default Search
