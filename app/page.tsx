'use client'

import {useState, useCallback} from 'react'
import Image from 'next/image'
import LayerToolBar from './components/LayerToolBar'
import CanvasImage from './components/CanvasImage'
import SettingsToolbar from './components/SettingsToolbar'

export default function Home() {

  const [imageUrl, setImageUrl] = useState<string>()
  const [textData, setTextData] = useState<Record<string,string>>({text: "",textColor: "black", bgColor: "white"})

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    console.log(imageUrl)
    setImageUrl(imageUrl);
  }

  const handleTextChange = (changedData: Record<string, string>) => {
    setTextData(changedData)
    console.log(textData)
  }
  return (
    <div className='grid grid-cols-5 max-w-screen-2xl mx-auto'>
     <LayerToolBar triggerChange={handleTextChange}/>


      <div className='col-span-3 
      border-2 '>
      <CanvasImage imgUrl={imageUrl || ''} textData={textData}/>

      </div>
      <SettingsToolbar handleFileUpload={handleImageUpload}/>
    </div>
  )
}
