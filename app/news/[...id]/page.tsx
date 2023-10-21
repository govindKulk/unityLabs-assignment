'use client'
import React, { useEffect, useState } from 'react'
import {useParams} from 'next/navigation'
import { fetcher } from '@/app/helpers/fetcher';
import Loading from '@/app/components/Loading';
import News from '@/app/components/News';
import placeholder from '../../../public/placeholder.jpg'
import Image from 'next/image';
import BreadCrumbs from '@/app/components/BreadCrumbs';
const SingleNewsPage = () => {
    const param = useParams();
    const [newsData, setNewsData] = useState<Record<any, any>>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(  () =>  {
        
        let url = `https://hn.algolia.com/api/v1/items/${param.id}`
        fetcher(url).then((res) => {
          setNewsData(res)
          setIsLoading(false)
        })
        
        console.log(newsData)

    
      }, [])

    if(isLoading){
        return  (
            <div className='min-h-screen justify-center items-center  max-w-screen-lg mx-auto relative'>
                <Loading isLoading={isLoading}/>
            </div>
        )
         
    }
    return (
        <div className=''>

        <div className='max-w-screen-lg mx-auto relative  min-h-screen flex flex-col  '>
            <BreadCrumbs/>
            
            <div className='w-full h-[200px]'>
                <Image className="w-full h-full object-cover" src={placeholder} alt='News Banner Image' width={800} height={400} />
            </div>
            <News
            title={newsData?.title}
            author={newsData?.author}
            points={newsData?.points}
            createdAt={newsData?.created_at}
            type={newsData?.type}
            text={newsData?.text}
            url={newsData?.url}
            comments={newsData?.children}
            />


        </div>

        
        </div>
    )
}

export default SingleNewsPage   
