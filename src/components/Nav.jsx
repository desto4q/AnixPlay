
import React from "react";
import { NavLink } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { Nav_links } from "../data/data";
import { useState } from "react";
import Seach_box from "./Seach_box";
import { Link } from "react-router-dom";
function Nav() {
  const [ham_state,setHam] = useState(false)


  return (
    <nav>
      <div className="logo ">
        <Link to={"/"}>AmixPlay</Link>
      </div>
      <div className="logo mobile_logo">
      <Link to={"/"}>AMP</Link>
      </div>
      <div className="links">
        {Nav_links.map(({ text, to }, key) => {
          return (
            <NavLink key={key} to={to}>
              {" "}
              {text}
            </NavLink>
          );
        })}
      </div>
      <Seach_box/>

      <div className="ham">
        <Hamburger toggled={ham_state} toggle={state=> {
            setHam(state)
        }} />
      </div>
      {
        ham_state? 
        <div className="nav_drop_down" style={ {
            transform: "translateY(0)"
        }}>

            {Nav_links.map(({text,to},key)=> {
                return(
                    <NavLink onClick={()=> {
                        setHam(false)
                    }} key={key} to={to}>{text}</NavLink>
                )
            })}
        </div>
    : null
      }
    
    </nav>
  );
}

export default Nav;
