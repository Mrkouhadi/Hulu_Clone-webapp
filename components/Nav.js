import { useRouter } from 'next/router';
import React from 'react'
import requests from '../utils/requests'
 
const Nav = () => {
  const router = useRouter();

  return <nav className='relative'>
            <div className='flex items-center px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
              {Object.entries(requests).map(([key, {title, url}])=>{
                return <h2  onClick={()=> router.push(`/?genre=${key}`)}
                            key={key} 
                            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
                        >{title}</h2>
              })}
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] w-1/12 h-10'/>
         </nav>
}
export default Nav
