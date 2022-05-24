import React from 'react'
import Thumbnail from './Thumbnail'

const Results = ({requests}) => {

  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
        {
            requests.map(res => (
                <Thumbnail key={res.id} result={res} />
            ))
        }
    </div>
  )
}

export default Results