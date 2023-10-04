import React from "react";
import { IconSearch } from "@tabler/icons-react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function Seach_box() {
  let [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  let location = useLocation().pathname;
  let param = searchParams.get("q");

  let setParam = (e) => {
    e.preventDefault();
    if (location.includes("/Search")) {
      setSearchParams({ q: e.target[0].value });
      console.log(param);
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
