'use client'
import React, {useState} from 'react'
import {AiFillDelete} from 'react-icons/ai'

interface ToolBarItemProps {
    title: string;
    inputs?: string[];
    isNewLayer?: boolean;
    addLayer?: (_: string) => void;
    deleteLayer?: (_: string) => void;
    isLayers?: boolean;
    inputType?: string;
    onInputChange?: (_: string) => void;
}
const ToolbarItem: React.FC<ToolBarItemProps>= ({
    title,
    inputs,
    isNewLayer,
    addLayer,
    deleteLayer,
    isLayers,
    inputType,
    onInputChange

}) => {

    const [showNewInput, setShowNewInput] = useState(false);
    const [newLayer, setNewLayer] = useState('');

    const [inputValue, setInputValue] = useState('');
 

    const createLayer = (e: any) => {
        addLayer?.(newLayer)
        setNewLayer('')
    }

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);

    }

  return (
    <div className='flex flex-col gap-2 border-b-2  py-4 border-b-gray-400  '>
        <div className='font-bold text-xl'>
            {title}
            

        </div>
        {isNewLayer && <input value={newLayer} className='' onChange={(e) => setNewLayer(e.target.value)}
        onKeyDown={(e) => {
            if(e.key == "Enter"){
                createLayer(e);
            }
        }} />}


        {inputs?.map((input, index) => (
        <div className='relative'>
            <input 
            
            key={index}
            className = " max-w-full outline-none hover:outline-none " type={inputType || "text"} 
            
            value={inputValue}
            onChange={(e) => {
                console.log(e);
                setInputValue(e.target.value)
                if(e.target.type === "color" && onInputChange){
                    onInputChange(inputValue);
                    console.log("trying to update the color")
                }
                } }
            
            onKeyDown={(e) => {
                if(e.key === "Enter" && onInputChange){

                    
                    onInputChange(inputValue)
                }
            }}
            />

            {isLayers && <span 
            data-layer-name={input}  
            
            className='absolute right-0 top-0 z-10' 
            
            onClick={(e: any) => deleteLayer && deleteLayer(e.currentTarget.getAttribute('data-layer-name'))}
            >
                <AiFillDelete size = {20} />
            </span>}
      
        </div>))}
    </div>
  )
}

export default ToolbarItem
