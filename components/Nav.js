import React from 'react'
import requests from '../utils/requests'
 
const Nav = () => {
  console.log(Object.entries(requests));
  return <nav>
            <div className='flex items-center px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
              {Object.entries(requests).map(([key, {title, url}])=>{
                return <h2 key={key} 
                           className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">
                          {title}
                       </h2>
              })}
            </div>
         </nav>
}
export default Nav