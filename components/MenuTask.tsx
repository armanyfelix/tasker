import { addDoc, collection, getDocs, query, doc } from "@firebase/firestore";
import { ArchiveIcon, CalendarIcon, PlusSmIcon, SunIcon, UsersIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import Groups from "./GroupsTask";


function MenuTask() {
    const [CreateList, setCreateList] = useState(false);
    const [lists, setLists] = useState(null);

    const getLists = async () => {
        const listsData = await getDocs(query(collection(db, 'tasks')));
        setLists(listsData.docs);
    }

    useEffect(() => {
        getLists();
    }, []);

    return (
        <div className="w-72 bg-gray-200 dark:bg-gray-700 dark:text-indigo-50 hidden sm:flex  p-2 flex-col shadow-xl drop-shadow-xl ">
            <ul className="pb-2 border-b-2 border-gray-300">
                <li className="!justify-start tasksBtn ">
                    <SunIcon className="w-6 h-6 mr-3" />
                    <span className="">To do</span>
                </li>
                <li className="!justify-start tasksBtn ">
                    <CalendarIcon className="w-6 h-6 mr-3" />
                    <span>Calendar</span>
                </li>
                <li className="!justify-start tasksBtn ">
                    <UsersIcon className="w-6 h-6 mr-3" />
                    <span>Assigned</span>
                </li>
            </ul>
            {
                lists && lists.map((list) => {
                    return list.data().type === 'list' && (
                        <button key={list.id} className="mt-1 !px-3 !justify-start tasksBtn">
                            <span>{list.data().name}</span>
                        </button>
                    )
                })
            }
            <div className="flex items-center border-t-2 border-gray-500 mt-1 justify-between mx-2">
                <button onClick={() => setCreateList(!CreateList)} className="flex items-center hover:opacity-50">
                    <PlusSmIcon className="w-6 h-6" />
                    <span className="-mt-0.5">New List</span>
                </button>
                <button className="hover:opacity-50 ">
                    <ArchiveIcon className="w-6 h-6" />
                </button>
            </div>
            {CreateList && <NewList getLists={getLists} />}
        </div>
    )
}

const NewList = ({ getLists }) => {
    const [name, setName] = useState(null);

    const addList = async () => {
        await addDoc(collection(db, 'tasks'), {
            name: name,
            type: "list",
            createdAt: new Date(),
        })
        // addDoc(collection(db, 'tasks', list.id, listName), {});
        getLists();
    }
    return (
        <div className=" top-52 z-50 bg-gray-400 p-2 rounded-lg">
            <form>
                <input onChange={e => setName(e.target.value)} type="text" name="list name" className="text-lg outline-none bg-gray-300 rounded p-1 " placeholder="List name" />
                <button onClick={addList} className="bg-indigo-400 text-white p-1 flex justify-center w-full mt-2 shadow rounded-lg">
                    Create list
                </button>
            </form>
        </div>
    )
}

export default MenuTask;
