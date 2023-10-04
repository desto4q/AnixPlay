import React from 'react'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'

function Card({img,title,episode,id}) {
  return (
    <Link to={`/Stream/${id}`} className="card">
        <img src={img && img} alt="" />
        <div className="text">
            {/* <p className='title'>{title && title}</p> */}
            <LinesEllipsis
            text={title&&title}
            maxLine={"2"}
            ellipsis='...'
            trimRight
            basedOn='letters'
            className='title'/>
            <div className="epi_cont">
                <p className='epi'> Episode {episode && episode}</p>
                {/* <p className='type'> sub</p> */}
            </div>
        </div>
    </Link>
  )
}

export default Card