'use client'


import {ClipLoader} from 'react-spinners'

const Loading = ({
  isLoading = false
}: {isLoading: boolean}) => {

  if(!isLoading){
    return
  }

  return (

       <div className='absolute w-full h-full min-h-screen max-w-screen-lg mx-auto  flex items-center justify-center'>
      <ClipLoader size={100}/>
      </div>
  
  )
}

export default Loading
