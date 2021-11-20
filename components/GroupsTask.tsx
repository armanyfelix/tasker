import { ChevronDownIcon, ChevronRightIcon, PlusSmIcon } from "@heroicons/react/outline";
import { useState } from "react";

function Groups({ name, selections }) {
  const [group, setGroup] = useState(false);
  return (
      <>
          <div className="flex group items-center p-2 justify-between">
              <button onClick={() => setGroup(!group)} className="flex rounded-xl hover:opacity-70 w-full justify-start">
                  {group ? <ChevronDownIcon className="w-5 h-5" /> : <ChevronRightIcon className="w-5 h-5" />}
                  <h5 className=" -mt-0.5 ml-1 ">{name}</h5>
              </button>
              <button className=" invisible group-hover:visible hover:opacity-50 ">
                  <PlusSmIcon className="w-5 h-5" />
              </button>
          </div>
          {group && selections && selections.map(selection =>
              <div key={selection} className=" ml-6 hover:opacity-70 cursor-pointer">
                  <h5>{selection}</h5>
              </div>
          )}
      </>
  )
}
export default Groups;