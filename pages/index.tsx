import { SwitchVerticalIcon } from "@heroicons/react/outline";
import Layout from "../components/layout";
import { useSession } from "next-auth/react";
import ListTask from "../components/ListTask";
import MenuTask from "../components/MenuTask";
import DetailsTask from "../components/DetailsTask";
import NewTask from "../components/NewTask";
import { db } from "../firebase";
import { collection, collectionGroup, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Landing from "./landing";


function Tasks() {

  const today = new Date();
  const { data: session, status } = useSession();
  const [tasks, setTasks] = useState(null);
  const [taskOnList, setTaskOnList] = useState(null)
  const [Details, setDetails] = useState(-1);

  const getTasks = async () => {
    const tasksData = await getDocs(query(collection(db, 'tasks')));
    setTasks(tasksData.docs);
  }


  useEffect(() => {
    getTasks();
  }, []);

  // if (!session) {
  //     return (
  //         <div className=" align-middle h-full text-center w-full mt-64">
  //             <p className="m-20 text-3xl font-semibold">You are not logged in. Please access to see the content</p>
  //             <button onClick={() => { signIn(); }} className="signin">
  //                 Sign up
  //             </button>
  //         </div>
  //     )
  // }
  if (status === "loading") {
    return (
      <div className="align-middle h-full text-center w-full mt-64">
        <p className="m-20 text-3xl font-semibold">Loading...</p>
      </div>
    )
  }
  if (!session) { return <Landing /> }

  return (
    <Layout>
      <div className="flex w-full max-h-[92.7vh] min-h-[86vh] sm:min-h-[92.7vh] overflow-hidden">
        <MenuTask />
        <section className="flex flex-col bg-gray-200 dark:bg-gray-600 dark:text-indigo-50 md:px-10 sm:px-4 px-2 pt-4 w-full ">
          <div className="flex justify-between mb-12">
            <div >
              <h1 className="text-3xl font-bold font-mono">Hi {session?.user.name}, good morning!</h1>
              <p>
                <span className="font-mono font-bold">{today.getHours()}:{today.getMinutes()} </span>
                - {today.toDateString()}
              </p>
            </div>
            <div className="flex items-center">
              <button className="flex space-x-1 hover:contrast-50 active:bg-gray-400 p-1 items-center rounded-xl">
                <SwitchVerticalIcon className="w-6 h-6 " />
                <p className="mb-0.5">by <span>Group</span></p>
              </button>
            </div>
          </div>
          <div className=" h-full overflow-auto ">
            <div className="border-b-2 border-gray-400">
              <p>Group were is added</p>
            </div>
            {
              tasks && tasks.map((task, i) => {
                if (task.data().type === "task") {
                  return (
                    <ListTask key={task.id}
                      title={task.data().title}
                      date={task.data().createdAt}
                      Subtask={task.data().subtask}
                      setDetails={() => { setDetails(i) }}
                    />
                  )
                }
                if (task.data().type === "list") {
                  (async () => { const taskOnList = await getDocs(query(collection(db, 'task', task.id, task.data().name))); })()

                  taskOnList && taskOnList.docs.map(task => {
                    return (
                      <ListTask key={task.id}
                        title={task.data().title}
                        date={task.data().createdAt}
                        Subtask={task.data().subtask}
                        setDetails={() => { setDetails(i) }}
                      />
                    )
                  })
                }
              })
            }
          </div>
          <NewTask lists={tasks} getTasks={getTasks} />
        </section>
        {
          Details > -1 && <DetailsTask
            id={tasks[Details].id}
            title={tasks[Details].data().title}
            subtask={tasks[Details].data().subtask}
            description={tasks[Details].data().description}
            createdAt={tasks[Details].data().createdAt}
            setDetails={() => { setDetails(-1) }}
            Details={Details}
            getTasks={getTasks}
          />
        }
      </div>
    </Layout >
  )
}

export default Tasks;
