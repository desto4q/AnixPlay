import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchTopSide } from '../Api/Api'
import { Radio } from 'react-loader-spinner'
import New_list from './New_list'
import Side_list from './Side_list'

function SideComp() {

  const {data, isLoading} = useQuery(["side"],async ()=>{
    return fetchTopSide()
  })
  // console.log(data)

  if (isLoading) {
    return <Radio wrapperClass='radio' colors={["#ffa42e","#ffa42e","#ffa42e"]} />
  }

  return (
    <div className="side_comp list">
      <div className="head">Top Airing</div>
      <div className="content">
        {data?.results?.map(({id,title})=>{
          return(
            <Side_list key={id} title={title} id={id}/>
          )
        })}
      </div>
    </div>
  )
}

export default SideComp