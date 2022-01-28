import React from 'react'
import { Link } from 'react-router-dom';

function Gif ({id, url, title}) {
  return (
    <Link to={`/gif/${id}/?id=${id}`} className='Gif-link'>
    <div key={id} className="gif">
        <img loading='lazy' src={url} alt={title} />
    </div>
    </Link>
  )
}

export default Gif;