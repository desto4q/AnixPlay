import React from 'react'
import New_list from '../components/New_list'
import { dummy_content } from '../data/data'
import Anime_list from '../components/Anime_list'
import SideComp from '../components/SideComp'

function Anime() {
  return (
    <div className="anime main_cont">
      <div className="left">
        <Anime_list Head={"Anime List"}/>
      </div>
      <div className="right">
        <SideComp/>
      </div>
    </div>
  )
}

export default Anime