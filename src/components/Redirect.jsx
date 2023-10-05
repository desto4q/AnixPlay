import React from 'react'
import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

function Redirect() {
    let navigate = useNavigate()
        useEffect(()=>{
            navigate("/1")
        },[])
  return (
    <div>Redirect</div>
  )
}

export default Redirect