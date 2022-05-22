import React from 'react'
import Thumbnail from './Thumbnail'

const Results = ({requests}) => {

  return (
    <div>
        {
            requests.map(res => (
                <Thumbnail key={res.id} result={res} />
            ))
        }
    </div>
  )
}

export default Results