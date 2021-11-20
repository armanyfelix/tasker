import Link from "next/link"
import { MenuIcon, SearchIcon } from "@heroicons/react/solid"
import { BellIcon } from "@heroicons/react/outline"
import { useSession } from "next-auth/react";
import Search from "./Search";
import { useRecoilState } from "recoil";
import { notificationState, searchState, userState } from "../../atoms/navbarAtoms";
import User from "./UserMenu";
import Notifications from "./Notifications";




function Navbar() {
  const { data: session } = useSession();
  const [openSearch, setOpenSearch] = useRecoilState(searchState);
  const [openUser, setOpenUser] = useRecoilState(userState);
  const [openNotifications, setOpenNotifications] = useRecoilState(notificationState);

  return (
    <header className={` w-full sticky top-0 shadow min-h-[3rem bg-light dark:bg-gray-800 z-40`}>
      <nav className=" flex justify-between  text-dark dark:text-indigo-100 items-center">
        <button className="navbarBtn ml-3">
          <MenuIcon className="sm:w-6 w-5 sm:h-6 h-5" />
        </button>
        <div className=" flex p-1 justify-end mr-3">
          <ul className="list-none space-x-1 flex items-center">
            {/* <li>
                <button onClick={() => setOpenShare(!openShare)}
                  className="px-2 py-1 text-white text-sm rounded-lg font-mono  bg-gradient-to-tl to-indigo-600 from-purple-500">
                  Share
                </button>
                 {openShare && <Share />}
              </li> */}
            <li>
              <button onClick={() => setOpenSearch(!openSearch)} className="navbarBtn">
                <SearchIcon className="sm:w-6 w-5 sm:h-6 h-5" />
              </button>
              {openSearch && <Search />}
            </li>
            <li>
              <button onClick={() => setOpenNotifications(!openNotifications)}
                className="navbarBtn">
                <BellIcon className="sm:w-6 w-5 sm:h-6 h-5" />
              </button>
              {openNotifications && <Notifications />}
            </li>
            <li>
              <button onClick={() => setOpenUser(!openUser)}
                className="md:p-1 mt-2 sm:mt-0 sm:p-0.5 p-0">
                <img src={session?.user.image} alt="user" className="sm:w-8 sm:h-8 w-7 h-7 hover:ring-2 ring-gray-700 rounded-full" />
              </button>
              {openUser && <User />}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

function Breadcrumbs() {
  return (
    <div className="flex items-center">

      {/* ARROWS ONLY IN DESKTOP */}
      {/* <div className="mr-2">
              <button className="hover:bg-gray-200 focus:bg-gray-300 p-2 items-center rounded-3xl">
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <button className="hover:bg-gray-200 focus:bg-gray-300 p-2 items-center rounded-3xl">
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div> */}
      <div className="flex items-center">
        <Link href="">
          <a className="navbarBtn">
            Breadcrumbs
          </a>
        </Link>
        /
      </div>
    </div>
  )
}


export default Navbar
