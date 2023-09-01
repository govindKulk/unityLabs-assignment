'use client'

import React, {useState, useRef} from 'react'
import Button from './Button'
import Image from 'next/image'

interface SettingsToolbarProps {
  handleFileUpload: (e:any) => void
}

const SettingsToolbar: React.FC<SettingsToolbarProps> = ({
  handleFileUpload
}) => {

  const fileInputRef = useRef<HTMLInputElement>(null);


  const handleButtonClick = () => {
   if(fileInputRef.current === null){
    return;
   }
   fileInputRef.current.click();
  };

  const [image, setImage] = useState(false)
  return (
    <div className='min-h-screen bg-neutral-100 px-4 py-6 border-4 border-gray-100 rounded-lg shadow-xl'>
      <div>
        <Button label='Upload Image' isSmall isSecondary action={handleButtonClick}/>

        {image && 'Uploaded Image'}
        <input ref={fileInputRef} className='hidden' type='file' onChange={handleFileUpload} />
      </div>
    </div>
  )
}

export default SettingsToolbar
