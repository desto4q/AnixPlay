import React from 'react'
import { Link } from 'react-router-dom'

function New_list({title,content}) {
  return (
    <div className="list">
        <div className="head">
            {title && title}
        </div>
        <div className="content">
            {content && content.map(({title,episode},key)=> {
                return (
                    <Link to={"/"} className="item" key={key}>
                        <h2>{title}</h2>
                        <p>episode {episode}</p>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default New_list