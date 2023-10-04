import React from 'react'
import { IconSearch } from "@tabler/icons-react";
import { useSearchParams } from 'react-router-dom';

function Seach_box() {
    let [searchParams, setSearchParams] = useSearchParams();

    let param = searchParams.get("search")

    let setParam  = (e) => {
        e.preventDefault()
        setSearchParams({search: e.target[0].value})
        // console.log(param)
    }
  return (
    <form className="input" onSubmit={setParam}>
        <input type="text" name="" id="" placeholder="search" />
        <button>
          <IconSearch />
        </button>
      </form>
  )
}

export default Seach_box