import React from 'react'
import Thumbnail from './Thumbnail'

const Results = ({requests}) => {

  return (
    <div>
        requests.map(req =>(
            <Thumbnail />
        ))
    </div>
  )
}

export default Results