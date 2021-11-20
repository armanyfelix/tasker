import { CogIcon } from "@heroicons/react/outline";
import { CodeIcon, UserCircleIcon } from "@heroicons/react/solid";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil"
import { notificationState } from "../../atoms/navbarAtoms";

const notifications = {
  all: [],
  updates: [
    {
      title: "Armany",
      description: "This is a update",
      icon: UserCircleIcon,
    },
    {
      title: "Juan",
      description: "This is another update",
    },
  ],
  mentions: [
    {
      title: "Armany",
      description: "This is a mention",
      icon: UserCircleIcon,
    },
  ],
  assigments: [
    {
      title: "Armany",
      description: "This is a assigment",
      icon: UserCircleIcon,
    },
  ]
}


function Notifications() {

  const [openNotification, setOpenNotification] = useRecoilState(notificationState);
  const [tab, setTab] = useState('all');

  const ref:any = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (openNotification && ref.current && !ref.current.contains(e.target)) {
        setOpenNotification(false);
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [openNotification]);


  return (
    <div ref={ref} className="absolute top-[3.1rem] right-[3rem] shadow-lg z-50 rounded-lg delay-1000 transition-all bg-gray-300 dark:bg-gray-700 p-4">
      <div className="flex items-center justify-between pb-3">
        <h2 className="font-mono font-bold text-lg">Notifications</h2>
        <button className="p-2 hover:brightness-200 rounded-xl">
          <CogIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-between focus:border-b-2 space-x-6 mb-3">
        <button onClick={() => setTab('all')} className={`${tab === 'all' && 'border-b-2'} hover:brightness-200 w-full`}>
          All
        </button>
        <button onClick={() => setTab('updates')} className={`${tab === 'updates' && 'border-b-2'} hover:brightness-200 w-full`}>
          Updates
        </button>
        <button onClick={() => setTab('mentions')} className={`${tab === 'mentions' && 'border-b-2'} hover:brightness-200 w-full`}>
          mentions
        </button>
        <button onClick={() => setTab('assigments')} className={`${tab === 'assigments' && 'border-b-2'} hover:brightness-200 w-full`}>
          Assignments
        </button>
      </div>
      {tab === 'all' && notifications.all.length === 0 ? (
        <div className="text-center">
          No notifications yet 😢
        </div>
      ) : tab === 'all' ? (
        notifications.all.map((item, index) => (
          <div>
            <div key={index} className="flex p-2 items-center justify-between">
              <div className="flex">
                <UserCircleIcon className="w-8 h-8 mr-2" />
                <div className="-space-y-2">
                  <h3 className="font-mono font-bold ">{item.title}</h3>
                  <p className="text-sm ">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (null)}
      {tab === 'updates' && notifications.updates.length === 0 ? (
        <div className="text-center">
          No updates yet 😢
        </div>
      ) : tab === 'updates' ? (
        notifications.updates.map((item, index) => (
          <div>
            <div key={index} className="flex p-2 items-center justify-between">
              <div className="flex">
                <UserCircleIcon className="w-8 h-8 mr-2" />
                <div className="-space-y-2">
                  <h3 className="font-mono font-bold ">{item.title}</h3>
                  <p className="text-sm ">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (null)}
      {tab === 'mentions' && notifications.mentions.length === 0 ? (
        <div className="text-center">
          No mentions yet 😢
        </div>
      ) : tab === 'mentions' ? (
        notifications.mentions.map((item, index) => (
          <div>
            <div key={index} className="flex p-2 items-center justify-between">
              <div className="flex">
                <UserCircleIcon className="w-8 h-8 mr-2" />
                <div className="-space-y-2">
                  <h3 className="font-mono font-bold ">{item.title}</h3>
                  <p className="text-sm ">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (null)}
      {tab === 'assigments' && notifications.assigments.length === 0 ? (
        <div className="text-center">
          No assigments yet 😢
        </div>
      ) : tab === 'assigments' ? (
        notifications.assigments.map((item, index) => (
          <div>
            <div key={index} className="flex p-2 items-center justify-between">
              <div className="flex">
                <UserCircleIcon className="w-8 h-8 mr-2" />
                <div className="-space-y-2">
                  <h3 className="font-mono font-bold ">{item.title}</h3>
                  <p className="text-sm ">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (null)}
    </div>
  )
}

export default Notifications
