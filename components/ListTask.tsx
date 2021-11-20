import { ArchiveIcon, CalendarIcon, FlagIcon, UserAddIcon } from "@heroicons/react/outline";
import Checkbox from "./CheckboxTask";


function ListTask({ title, Subtask, setDetails, date }) {



    return (
        <div className="flex items-center group justify-between mt-2 bg-gray-300 dark:bg-gray-500 shadow-md hover:brightness-95 rounded-full">
            <div className="flex items-center w-full">
                <a className="cursor-pointer p-1">
                    <Checkbox />
                </a>
                <div onClick={setDetails} className="flex items-center ml-1 w-full  cursor-pointer">
                    <p className="font-mono font-bold text-lg p-3 leading-tight">{title}</p>
                </div>
            </div>

            <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                <button className="hover:bg-gray-400 rounded-lg p-0.5">
                    <UserAddIcon className="w-6 h-6" />
                </button>
                <button className="hover:bg-gray-400 rounded-lg p-1">
                    <FlagIcon className="w-5 h-5" />
                </button>
                <button className="hover:bg-gray-400 rounded-lg p-0.5">
                    <CalendarIcon className="w-6 h-6" />
                </button>
                <button className="hover:bg-gray-400 rounded-lg p-0.5">
                    <ArchiveIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}

export default ListTask;
