import Image from 'next/image'
import React from 'react'
import { ThumbUpIcon } from '@heroicons/react/outline'

const Thumbnail = ({result}) => {
    const base_url="https://image.tmdb.org/t/p/original/"

  return (
    <div className='group cursor-pointer transition duration-300 ease-in transform sm:hover:scale-105 hover:z-50'>
        <Image layout="responsive"
               height={1080} width={1920}
               src={
                   `${base_url}${result.backdrop_path|| result.poster_path}` ||
                   `${base_url}${result.poster_path}`
                }
        />
        <div className='p-2'>
            <p className='truncate max-w-md '>{result.overview}</p>
            <h2 className='mt-1 text-2xl text-white group-hover:font-bold transition-all duration-300 ease-in-out'>
                {result.title || result.original_name}
            </h2>
            <p className='flex items-center opacity-0 group-hover:opacity-100 duration-300  ease-in-out'>
                {result.media_type && `${result.media_type} .`}{" "}{result.release_date || result.first_air_date} .{" "}
                <ThumbUpIcon className='h-5 mx-2'/> {result.vote_count}
            </p>
        </div>
    </div>
  )
}

export default Thumbnail