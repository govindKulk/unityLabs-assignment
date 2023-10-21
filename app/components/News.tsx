'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import Avatar from './Avatar';
import ShareModal from './ShareModal';
import CommentItem from './CommentItem';
interface NewsProps {
    title: string;
    type: string;
    url: string;
    author: string;
    points: number;
    text: string | null;
    createdAt: string;
    comments: Record <any, any>[]
}
const News: React.FC<NewsProps> = ({
    title,
    type,
    url,
    author,
    points,
    text,
    createdAt,
    comments
}) => {

    const [cPage, setCPage] = useState(0);
    return (
      
        <div className='bg-white rounded-t-2xl py-4 px-4 shadow-xl  rounded-b-lg absolute top-[190px]   w-full 
        flex flex-col items-start gap-2
        '>
            <div className='self-end relative'>
                <ShareModal url={url}/>
            </div>
            <Link href={url ? url : '#'}>
            <h1 className='font-bold text-xl'>
                {title}
            </h1>
            <br />
            <span className='text-sm block text-gray-400'>{createdAt}</span>

            </Link>
       
            <span className=' rounded-xl p-2 bg-gray-200 text-black shadow'>
                {type}
            </span>
            <div className='flex items-center gap-2 font-bold text-sm'>
                <span>
                    <Avatar/>
                </span>
                <span>
                    {author}
                </span>
            </div>

            <div className=''>
                {text ? text : 'lorem ipsum dolor sit amet lore mauris  convallis   nisl lorem ipsum dolor sit amet'}
            </div>

            <div className='w-full h-1 bg-black'>

            </div>
            <div className='py-4 flex flex-col gap-4'>
                {comments.map((comment, index) => {
                    if(index > 8 + 10*cPage){
                        return 
                    }

                    return (
                        <div key={index}>
                            <CommentItem
                            author={comment.author}
                            title={comment.title}
                            createdAt={comment.created_at}
                            text={comment.text}
                            />
                        </div>
                    )
                })}

                <button className='border border-gray-400  outline-none self-center rounded-lg py-2 px-4 flex justify-center items-center shadow'
                onClick={() => setCPage(prev => prev + 1)}>
                    View More
                </button>
            </div>
        </div>
    )
}

export default News
