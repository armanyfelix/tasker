import { signIn, getSession } from "next-auth/react";

function Landing() {
  return (
    <div className="w-full h-screen bg-light dark:bg-gray-700">
      <header className="flex justify-between gradient p-2 z-50 sm:py-5 sm:px-8 md:py-10 lg:py-16 md:px-24 lg:px-52">
        <h1 className="text-5xl font-bold font-serif z-20 text">Tasker</h1>
        <div className="">
          <button onClick={(e) => { e.preventDefault(); signIn(); }} className="w-full sm:w-auto inline-flex items-center justify-center text-white font-medium bg-gray-400 bg-opacity-50 hover:bg-opacity-60 rounded-lg shadow-sm hover:shadow-lg py-3 px-5 border border-gray-400 border-opacity-10 transform-gpu hover:-translate-y-0.5 transition-all duration-150">
            Sign in
          </button>
        </div>
      </header>
      <div className="text-5xl font-extrabold text-transparent bg-landing-header text-center p-2">
        <h1 className="bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 p-2">Manage.</h1>
        <h1 className="bg-clip-text bg-gradient-to-t from-red-500 via-purple-600 to-blue-500 p-2"> Get things done.</h1>
        <h1 className="bg-clip-text bg-gradient-to-tl from-red-600 to-orange-500 p-2"> Create.</h1>
      </div>
      <div className="m-10 flex justify-center">
        <div>
          <a onClick={(e) => { e.preventDefault(); signIn(); }}
            className="from-purple-700 to-blue-500 bg-gradient-to-b shadow-blue  hover:opacity-90 active:shadow-inner text-white text-xl cursor-pointer w-40 p-3 my-4 rounded-3xl font-mono font-bold flex mx-auto justify-center transform-gpu hover:-translate-y-0.5 transition-all duration-150">
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}


export default Landing