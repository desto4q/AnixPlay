import React from 'react'
import New_list from '../components/New_list'
import { dummy_content } from '../data/data'
import Anime_list from '../components/Anime_list'

function Anime() {
  return (
    <div className="anime main_cont">
      <div className="left">
        <Anime_list Head={"Anime List"}/>
      </div>
      <div className="right">
        <New_list title={"head"} content={dummy_content}/>
        <New_list title={"head"} content={dummy_content}/>
      </div>
    </div>
  )
}

export default Anime