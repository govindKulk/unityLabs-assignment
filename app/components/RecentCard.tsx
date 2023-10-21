import Link from 'next/link';
import React from 'react'


interface RecentCardProps {
    title: string;
    author: string;
    createdAt: string;
    objectId: string;
}
const RecentCard: React.FC<RecentCardProps> = ({
    title,
    author,
    createdAt,
    objectId
}) => {

  const colors = [
    'bg-red-400',
    'bg-teal-500',
    'bg-emerald-400',
    'bg-sky-400',
    'bg-rose-500',
    'bg-fuchsia-400'
  ]

  const getRandomColor = () => {
    const randInt = Math.floor(Math.random()*100);
    console.log(randInt);
    return colors[randInt % colors.length];
  }

  
  return (
    <Link href={`/news/${objectId}`} className={`w-full max-w-full  min-h-full h-full rounded-2xl shadow ${getRandomColor()} text-white py-4 px-4 flex flex-col gap-2`}>
      <h2 className='text-2xl break-all font-bold py-2'>
        {title ? title.split(' ').slice(0,5).join(' ')+"..." : 'No Title'}
      </h2>
      <p>
        {createdAt.split('T')[0]}
      </p>
      <p className='font-medium rounded-xl py-2 px-2 bg-gray-500 text-white text-xl  self-start'>
        {author}
      </p>

    </Link>
  )
}

export default RecentCard
