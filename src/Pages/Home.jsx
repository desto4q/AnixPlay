import React from 'react'
import Anime_list from '../components/Anime_list'
import New_list from '../components/New_list'
import { dummy_content } from '../data/data'
import { useEffect } from 'react'
import { fetch_recent } from '../Api/Api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

function Home() {
  let {id} = useParams()
  let {data} = useQuery(["recent",id],  async()=>{
    return fetch_recent({id})
  })
   
  console.log(data)


  let Cards = data?.results?.map(({image,title,id,episodeNumber})=>{
    return (<Card key={id} title={title} img={image} episode={episodeNumber} id={id}/>)
  })
  return (
    <div className="home main_cont">
      <div className="left">
        <Anime_list content={Cards}/>

      </div>
      <div className="right">
        <New_list content={dummy_content} title={"head"}/>
        <New_list content={dummy_content} title={"head"}/>
      </div>
    </div>
  )
}

export default Home