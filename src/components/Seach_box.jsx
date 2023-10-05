import React from "react";
import { IconSearch } from "@tabler/icons-react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "../context/Context";

function Seach_box() {
  const {sParam,setSParam} = useContext(PageContext)
  let [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  let location = useLocation().pathname;
  let param = searchParams.get("q");

  let setParam = (e) => {
    e.preventDefault();
    setSParam(e.target[0].value)
    if (location.includes("/Search")) {
      setSearchParams({ q: e.target[0].value });
    }
    else {
      navigate("./Search/1");
    }
   
  };
  return (
    <form className="input" onSubmit={setParam}>
      <input type="text" name="" id="" placeholder="search" />
      <button>
        <IconSearch />
      </button>
    </form>
  );
}

export default Seach_box;
