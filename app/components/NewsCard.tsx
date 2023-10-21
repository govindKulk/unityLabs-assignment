import Link from 'next/link';
import React from 'react'

interface NewsCardProps {
    title: string;
    url: string;
    createdAt: string;
    tags: string[];
    author: string;
    objectId: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
    title,
    url,
    createdAt,
    tags,
    author,
    objectId
}) => {


  return (
    <Link href={`/news/${objectId}`} className='block bg-white w-full h-full px-4 py-4 rounded-xl shadow'>
      <h3 className='font-bold text-xl'>
        {title}
        <br/>
        <span className='font-medium text-lg '>
            {author}
        </span>
      </h3>

      <div className='py-2'>
      <p className='font-bold break-all text-gray-400'>{createdAt}</p>
      <p className='flex flex-wrap gap-2'>{tags.map((tag , index) => <span key={index} className='break-all px-2 py-1 text-white rounded-xl shadow-md bg-slate-500'>{tag}</span>)}</p>
      </div>
    </Link>
  )
}

export default NewsCard
