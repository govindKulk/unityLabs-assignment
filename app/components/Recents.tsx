'use client'

import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import RecentCard from './RecentCard'
import { fetcher } from '../helpers/fetcher'

import './slider.css'
import CustomArrow from './CustomArrow'

const Recents = () => {

    const [recentsNews, setRecentsNews] = useState<Record<any, any>[]>([])

    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomArrow isNext/>,
        responsive: [
            
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows:1,
                arrows:false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows:1,
                arrows:false,
                dots: true
              }
            }
          ],
      };


    useEffect(() => {
        fetcher(`https://hn.algolia.com/api/v1/search_by_date?numericFilters=created_at_i%3E3600`).then((res) => setRecentsNews(res.hits));
    }, [])
    

    return (
        <div className='bg-black/20 shadow rounded-lg my-2 py-8 px-4'>
        <h2 className='py-4 text-4xl font-bold uppercase text-white'> Just In</h2>
        <Slider {...settings}>
            {
                

                recentsNews && recentsNews.slice(0,10).map((news, index) => {
                    return (
                        <div key={index} className=' min-h-full h-full w-full '>
                            <RecentCard title={news.story_title} 
                            createdAt={news.created_at}
                            author={news.author}
                            objectId={news.story_id}
                            />
                        </div>
                    )
                })
            }
        </Slider>
      </div>
  )
}

export default Recents
