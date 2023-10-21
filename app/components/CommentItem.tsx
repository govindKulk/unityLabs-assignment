'use client'

import React, { useState } from 'react'
import Avatar from './Avatar';

interface CommentItemProps {
  author: string,
  createdAt: string;
  text: string;
  title: string
}
const CommentItem: React.FC<CommentItemProps> = ({
    author,
    createdAt,
    text,
    title
}) => {


  const [readMore, sertReadMore] = useState(false)
  return (
    <div className='flex gap-4 '>
      <div>
        <span>
          <Avatar/>
        </span>
        

      </div>


      <div>
      <span className='font-bold text-xl'>
          {author}
        </span>
      <p className='text-gray-400 font-medium'>
        {createdAt.split('T')[0]}
      </p>
      <div className='font-bold text-lg'>
        {title && title}
      </div>

      <div className='text-lg py-2 text-justify break-all'>
        {
          !readMore ? text.slice(0, 250) : text.slice(0, text.length)
        }
        {text.length > 251 && <span className='text-blue-600 font-medium break-keep  block'>
          <span onClick={() => sertReadMore(prev => !prev)}  className='inline cursor-pointer'>
          {readMore  ? ' Read Less' : ' Read More'}
          </span>
        </span>}
      </div>
      </div>

     
    </div>
  )
}

export default CommentItem
