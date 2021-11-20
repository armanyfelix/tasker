import { deleteDoc, doc, updateDoc } from "@firebase/firestore";
import { ArchiveIcon, CalendarIcon, CheckIcon, ChevronDoubleRightIcon, ClipboardListIcon, ClockIcon, FlagIcon, PaperClipIcon, PlusSmIcon, RefreshIcon, TagIcon, TrashIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { db } from "../firebase";
import Checkbox from "./CheckboxTask";

function DetailsTask(props) {

  const { id, title, setDetails, getTasks, subtask, description, createdAt } = props;

  const updateTask = async () => {
    await updateDoc(doc(db, 'tasks', id), { title });
    getTasks();
  }

  const deleteTask = async () => {
    await deleteDoc(doc(db, 'tasks', id));
    getTasks();
  }

  // const filePickerRef = useRef(initialValue)
  // const [File, setFile] = useState(null)

  // const addFile = (e) => {
  //   const reader = new FileReader();
  //   if (e.target.files[0]) {
  //     reader.readAsDataURL(e.target.files[0]);
  //   }
  //   reader.onload = (readerEvent) => {
  //     setFile(readerEvent.target.result);
  //   };
  // };


  return (
    <aside className="w-1/3 overflow-hidden dark:bg-gray-700 bg-gray-200 md:flex flex-col justify-between shadow-xl drop-shadow-xl">
      <div className="p-2 flex flex-col h-full justify-between">
        <div className="p-1 border-b-2 text-center border-gray-300 ">
          <p>Group were is added</p>
        </div>
        <div className="flex items-center p-1 ">
          <Checkbox />
          <p contentEditable="true" className="font-mono outline-none font-bold text-lg leading-tight">
            {title}
          </p>
        </div>
        <div className="flex items-center p-1 ">
          <div className="scale-75" ><Checkbox /></div>
          <p contentEditable="true" className="font-mono outline-none font-bold text-sm leading-tight">
            {subtask}
          </p>
        </div>
        <button className=" w flex items-center text-gray-500 self-en rounded-lg justify-center hover:bg-gray-300 dark:hover:bg-gray-400 ">
          <PlusSmIcon className="w-5 h-6" />
          <span className="text-sm  font-semibold">Subtask</span>
        </button>
        <div className=" focus-within:shadow h-full p-1">
          <textarea placeholder="Description" value={description} className=" w-full resize-none h-full outline-none bg-transparent" />
        </div>
        <div className="flex justify-between items-center">
          <button className=" tasksBtn ">
            <FlagIcon className="w-7 h-7" />
          </button>
          <button className=" tasksBtn ">
            <CalendarIcon className="w-7 h-7" />
          </button>
          <button className=" tasksBtn ">
            <PaperClipIcon className="w-7 h-7" />
          </button>
          <button className=" tasksBtn ">
            <ArchiveIcon className="w-7 h-7" />
          </button>
          <button className=" tasksBtn ">
            <TagIcon className="w-7 h-7" />
          </button>
        </div>
        <div className=" flex justify-between items-center mt-1">
          <button onClick={() => setDetails(-1)}
            className="p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg">
            <ChevronDoubleRightIcon className="w-6 h-6" />
          </button>
          <div className="flex flex-col text-center">
            <p className="text-sm">Created:</p>
            <p className="text-sm">{createdAt.toDate().getHours()}:{createdAt.toDate().getMinutes()} - {createdAt.toDate().toDateString()}</p>
          </div>
          <button onClick={deleteTask} className="p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg">
            <TrashIcon className=" w-7 h-7 text-red-700" />
          </button>
        </div>
      </div>
    </aside >
  )
}

export default DetailsTask;
