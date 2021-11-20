import { FilterIcon, SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { searchState } from "../../atoms/navbarAtoms";

function Search() {

  const [openSearch, setOpenSearch] = useRecoilState(searchState);

  return (
    <>
      <div className="absolute top-32 right-1/2 translate-x-1/2 z-50 rounded bg-gray-300">
        <div className="flex flex-row items-center p-2 border-b-2 border-gray-200">
          <SearchIcon className="w-7 h-7 mr-1 cursor" />
          <input type="text" className="flex flex-grow bg-transparent w-72 border-none outline-none" />
          <FilterIcon className="w-6 h-6 ml-1" />
        </div>
        <div className="flex justify-between text-sm mx-2 font-mono">
          <span>RECENT</span>
          <button>Clear</button>
        </div>
        <ul className="mx-3">
          <li>Recent page 1</li>
          <li>Recent page 2</li>
          <li>Recent page 3</li>
          <li>Recent page 4</li>
          <li>Recent page 5</li>
        </ul>
      </div>
      <div onClick={() => setOpenSearch(false)}
        className={`${open ? 'fixed' : 'hidden'} top-0 left-0 w-full h-screen z-40 bg-black opacity-25`} >
      </div>
    </>
  )

}

export default Search;