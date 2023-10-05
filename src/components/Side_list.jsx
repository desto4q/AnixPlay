import React from 'react'
import { Link } from 'react-router-dom'

function Side_list({title,id}) {
  return (
    <Link to={`/Stream/${id}`} className="side_list item ">
        <h2>{title && title}</h2>
        {/* <p>{}</p> */}
    </Link>
  )
}

export default Side_list