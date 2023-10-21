'use client'


import Image from 'next/image'
import Search from './components/Search'
import { useEffect, useState } from 'react'
import NewsCard from './components/NewsCard';
import { ClipLoader } from 'react-spinners';

import { getResults, fetcher } from './helpers/fetcher';
import Loading from './components/Loading';
import Recents from './components/Recents';

export default function Home() {
  const [allRes, setAllRes] = useState<Record<any, any>[]>([]) 
  const [newsData, setNewsData] = useState<Record<any, any>[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  
  const onSubmit = async (query: string) => {
    
    setIsLoading(true)
    setTimeout(async () => {
       const res = await getResults(`http://hn.algolia.com/api/v1/search?query=${query}`);
    setNewsData(res.hits)
    setIsLoading(false)
    
  }, 2000)
  }

  useEffect(  () =>  {
    setIsLoading(true)
    fetcher('http://hn.algolia.com/api/v1/search').then((res) => {
      setIsLoading(false);
      setNewsData(res.hits)
      setAllRes(res.hits)
    })
    

  }, [])

  const handleSearch = (value: string) => {
   
    
    const filteredNewstData = newsData.filter((news) => news.title?.toLowerCase().includes(value.toLowerCase()) | news.author?.toLowerCase().includes(value.toLowerCase()))
 
    if(filteredNewstData.length === 0){
      setNewsData(allRes)
      return
    }
    setNewsData(filteredNewstData);

  }


  

  return (
    <div className='bg-black/50'>
          <div className=' mx-auto max-w-screen-lg px-4 py-4  min-h-screen'>
      

      <Loading isLoading={isLoading} />
      <Search disabled={isLoading} onChange={handleSearch} handleOnSubmit={onSubmit}/>

      <Recents/>
      <div className='grid  grid-cols-1 sm:grid-cols-2 gap-4 py-8 '>
        {
          newsData.map((news, index) => {
            return <div key={index} className=' '>
              <NewsCard title={news.title } url={news.url} createdAt={news.created_at} tags={news._tags} author={news.author} objectId={news.objectID}/> 
            </div>
          })
        }
      </div>
    </div>
    </div>
  
  )
}
