import { CalendarIcon, PlusIcon, FlagIcon, PlusSmIcon, SunIcon, UserAddIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import DatesPicker from './DatesPicker';




function NewTask({ getTasks, lists }) {


    const [createTask, setCreateTask] = useState(false);
    const [title, setTitle] = useState(null);
    const [description, setTaskDescription] = useState(null);
    const [subtask, setSubtask] = useState(null);
    const [list, setList] = useState(-1);
    const [dueDate, setDueDate] = useState(null);
    const [assignee, setAssignee] = useState(null);
    const [priority, setPriority] = useState<Number>(null);
    const [startDate, setStartDate] = useState(null);



    const addTask = async () => {
        if (list == -1) {
            await addDoc(collection(db, 'tasks'), {
                title: title,
                subtask: subtask,
                description: description,
                type: 'task',
                createdAt: new Date()
            });
        } else {
            await addDoc(collection(db, 'tasks', lists[list].id, lists[list].data().name), {
                title: title,
                subtask: subtask,
                description: description,
                type: 'task',
                list: list,
                createdAt: new Date()
            });
        }
        getTasks();
    }

    const handleAddTask = () => {
        addTask();
        setCreateTask(false);
        setTitle('');
        setTaskDescription('');
        setSubtask('');
        setList(-1);
    }


    return (
        <div className={`${createTask && '-translate-y-10 min-h-[74vh]'} flex ease-in-out duration-1000 transition-all bg-gray-300 dark:bg-gray-500 mb-2 shadow-xl rounded-3xl`}>
            {/* LEFT */}
            <div onClick={() => setCreateTask(true)} className="w-full hover:brightness-95">
                <div className="m-3 flex items-center group rounded-3xl">
                    <PlusIcon className="w-6 h-6 mr-2 group-focus-within:opacity-0" />
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" name="task" className="bg-transparent w-full outline-none text-xl" placeholder="New task" />
                </div>
                <div className={`${createTask ? 'flex flex-col' : 'hidden'}`}>
                    <div className="flex items-center ml-3 group">
                        <PlusSmIcon className="h-6 w-6 mr-2 group-focus-within:opacity-0" />
                        <input onChange={e => setSubtask(e.target.value)} type="text" name="subtask" className=" w-full bg-transparent outline-none text-lg" placeholder="Subtask" />
                    </div>
                    <div className="flex items-center p-2 h-80 ">
                        <textarea onChange={e => setTaskDescription(e.target.value)} name="description" className="p-1 w-full bg-transparent h-full resize-none outline-none rounded-lg" placeholder="Description" />
                    </div>
                </div>
            </div>
            {/* RIGHT */}
            <div className={`${createTask ? 'flex flex-col' : 'hidden'} border-l-2 justify-between  p-2`}>
                <div className="justify-end flex flex-col">
                    <button onClick={() => setCreateTask(false)} className=" self-end p-2 m-1 hover:bg-gray-400 active:opacity-75 rounded-full">
                        <XIcon className="h-5 w-5" />
                    </button>
                    <div className="space-y-5">
                        <div>
                            <h3 className=" text-gray-500 dark:text-indigo-50 font-bold">List</h3>
                            <select onChange={e => setList(Number(e.target.value))} className="bg-transparent w-52 cursor-pointer flex  outline-none dark:bg-gray-500 hover:bg-blue-900 text-lg">
                                <option value="-1">None</option>
                                {
                                    lists && lists.map((list, i) => {
                                        return list.data().type === 'list' && (
                                            <option key={list.id} value={i}>
                                                {list.data().name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <h3 className=" text-gray-500 dark:text-indigo-50 font-bold">Date</h3>
                            <DatesPicker />
                        </div>
                        {/* <div>
                            <h3 className=" text-gray-500 dark:text-indigo-50 font-bold">Assign</h3>
                        </div> */}
                        <Priority setPriority={setPriority} />
                    </div>
                </div>
                <button onClick={handleAddTask} type="submit" className="flex self-end w-36 justify-center p-2 font-bold bg-red-500 m-3 hover:bg-opacity-80 shadow rounded-full">
                    <PlusIcon className="w-6 h-6 mr-1" />
                    Create Task
                </button>
            </div>
        </div>
    )
}

const Priority = ({ setPriority }) => {

    const handlePriority = (e) => {
        setPriority(e.target.value);
    }

    return (
        <div>
            <h3 className=" text-gray-500 dark:text-indigo-50 font-bold">Priority</h3>
            <div onChange={handlePriority} className="flex space-x-4 justify-center ">
                <label className="inline-block">
                    <input type='radio' value='1' name='priority' className="hidden peer" />
                    <FlagIcon className="w-9 h-9 p-1 rounded-lg text-red-600 cursor-pointer peer-checked:bg-gray-400 peer-checked:shadow-lg" />
                </label>
                <label>
                    <input type='radio' value='2' name='priority' className="hidden peer" />
                    <FlagIcon className="w-9 h-9 p-1 rounded-lg text-yellow-500 cursor-pointer peer-checked:bg-gray-400 peer-checked:shadow-lg" />
                </label>
                <label>
                    <input type='radio' value='3' name='priority' className="hidden peer" />
                    <FlagIcon className="w-9 h-9 p-1 rounded-lg text-green-600 cursor-pointer peer-checked:bg-gray-400 peer-checked:shadow-lg" />
                </label>
                <label>
                    <input type='radio' value='4' name='priority' className="hidden peer" />
                    <FlagIcon className="w-9 h-9 p-1 rounded-lg text-blue-600 cursor-pointer peer-checked:bg-gray-400 peer-checked:shadow-lg" />
                </label>
            </div>
        </div>
    )
}

export default NewTask;
