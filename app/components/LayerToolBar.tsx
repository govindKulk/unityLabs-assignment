'use client'

import React,{useCallback, useState, useEffect} from 'react'
import ToolbarItem from './ToolbarItem'
import Button from './Button'

interface LayerToolBarProps {
    triggerChange: (_: Record<string, string>) => void
}

const LayerToolBar: React.FC<LayerToolBarProps> = ({
    triggerChange
}) => {

    const [layers, setLayers] = useState<string[]>([])

    const [text, setText] = useState('')
    const [textColor, settextColor] = useState('')
    const [bgColor, setbgColor] = useState('')

    const addLayer = (layer: string) => {
        setLayers((prev) => ([layer, ...prev]))
        console.log(layers)
    }

    const deleteLayer = (layer: string) => {
        let newLayers = layers.filter((item) => item !== layer)
        setLayers(newLayers);
        console.log(layer)
    }

    useEffect(() => {
        triggerChange({text, textColor, bgColor});
        console.log({text, textColor, bgColor} + "from layertoolbar")
    }, [text, textColor, bgColor, triggerChange])

    const handleDownload = () => {
        const a = document.createElement('a');
        const canvas: any = document.getElementById('canvas');
        const dataURL = canvas.toDataURL('image/png');

        a.href = dataURL;
        a.download = 'canvas-image.png'
        if(confirm('Do you want to download the file?')){
            a.click();
        };
        
    }

    return (
        <div className='min-h-screen bg-neutral-100  border-4 border-gray-100 rounded-lg shadow-xl'>

            <div className='flex flex-col gap-3 '>
                {/* ToolBar Items List */}
                <Button label="Save Template" action={handleDownload} />
                <ToolbarItem title="Name" 
                inputs={['Unnamed']} />

                <ToolbarItem title='New Layer' isNewLayer addLayer={addLayer}/>

                <ToolbarItem title='Layers' isLayers inputs={layers} deleteLayer = {deleteLayer}/>

                <ToolbarItem title='Add Text'
                inputs={['Add Text Here']}
                inputType='text'
                onInputChange = {(inputValue: string) => setText(inputValue) }
                />
                <ToolbarItem title='Add Text Color'
                inputs={['']}
                inputType='color'
                onInputChange = {(inputValue: string) => settextColor(inputValue) }
                />
                <ToolbarItem title='Add Text Background'
                inputs={['']}
                inputType='color'
                onInputChange = {(inputValue: string) => setbgColor(inputValue) }
                />

            </div>
        </div>
    )
}

export default LayerToolBar
