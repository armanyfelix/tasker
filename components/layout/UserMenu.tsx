import { LogoutIcon, CogIcon } from "@heroicons/react/outline";
import { MoonIcon, SunIcon, TranslateIcon } from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/navbarAtoms";

function User() {

  const [openUser, setOpenUser] = useRecoilState(userState);
  const { data: session } = useSession();
  const ref:any = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (openUser && ref.current && !ref.current.contains(e.target)) {
        setOpenUser(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [openUser]);

  return (
    <div ref={ref} className="absolute top-[3.1rem] right-2 shadow-lg z-50 rounded-lg delay-1000 transition-all bg-gray-300 dark:bg-gray-700 p-2" >
      <div className="flex p-2 space-x-3 items-center">
        <img src={session?.user.image} alt="user" className="w-10 h-10" />
        <div className="flex flex-col -space-y-2 ">
          <h2 className="font-mono font-bold text-lg">{session?.user.name}</h2>
          <h3 className="font-semibold text-gray-500 tracking-tighter text-sm">{session?.user.email}</h3>
        </div>
      </div>
      <div className="mt-2">
        <button className="w-full font-bold flex items-center p-2 rounded-lg hover:shadow-lg hover:bg-gray-400 dark:hover:bg-gray-800">
          <CogIcon className="w-7 h-7 mr-3" />
          Settings
        </button>
        <button className="w-full font-bold flex items-center p-2 rounded-lg hover:shadow-lg hover:bg-gray-400 dark:hover:bg-gray-800">
          <TranslateIcon className="w-7 h-7 mr-3" />
          Lenguage
        </button>
        <ThemeIcon />
        <button onClick={() => signOut()} className="w-full font-bold flex items-center p-2 rounded-lg hover:shadow-lg hover:bg-gray-400 dark:hover:bg-gray-800">
          <LogoutIcon className="w-7 h-7 mr-3" />
          Sign out
        </button>
      </div>
    </div>
  )
}

const ThemeIcon = () => {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return (
    <button onClick={handleTheme} className="w-full font-bold flex items-center p-2 rounded-lg hover:shadow-lg hover:bg-gray-400 dark:hover:bg-gray-800">
      {theme === 'light' ? (
        <>
          <SunIcon className="w-7 h-7 mr-3 outline-none text-yellow-400" />
          Theme: Light
        </>
      ) : (
        <>
          <MoonIcon className="w-7 h-7 mr-3 outline-none" />
          Theme: Dark
        </>
      )}
    </button>
  );
};


export default User
