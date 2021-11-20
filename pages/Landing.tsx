import { signIn, getSession } from "next-auth/react";

function Landing() {
  return (
    <div className="w-full h-screen bg-light dark:bg-gray-900">
      <div>
        <header className="flex justify-between gradient p-2 z-50 sm:py-5 sm:px-8 md:py-10 lg:py-16 md:px-24 lg:px-52">
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
            <p className="text-2xl">All  the tools you and your team need</p>
            <a onClick={(e) => { e.preventDefault(); signIn(); }}
              className="from-purple-700 to-blue-500 bg-gradient-to-b shadow-blue  hover:opacity-90 active:shadow-inner text-white text-xl cursor-pointer w-40 p-3 my-4 rounded-3xl font-mono font-bold flex mx-auto justify-center transform-gpu hover:-translate-y-0.5 transition-all duration-150">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Gradient = () => {
  return (
    <svg className="realtive" width="1440" height="764" viewBox="0 0 1440 764" fill="none"
      xmlns="http://www.w3.org/2000/svg" >
      <path d="M0 0H1440V244.74L0 509.3V0Z" fill="url(#paint0_radial_5:375)" />
      <g filter="url(#filter0_f_5:375)">
        <path d="M-152 683.376L1462 497.236V158.565C1369.34 197.631 1143.23 285.76 980.042 325.746C776.05 375.728 466.7 277.488 316.508 256.805C196.355 240.259 -45.8945 303.915 -152 337.811V683.376Z" fill="url(#paint1_linear_5:375)" />
      </g>
      <defs>
        <filter id="filter0_f_5:375" x="-232" y="78.5647" width="1774" height="684.812" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_5:375" />
        </filter>
        <radialGradient id="paint0_radial_5:375" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1417 101.257) rotate(-175.825) scale(1390.69 2925.42)">
          <stop stop-color="#8FB3FF" />
          <stop offset="0.277176" stop-color="#9D6BE8" />
          <stop offset="0.542906" stop-color="#DE2778" />
          <stop offset="1" stop-color="#B03DE2" />
        </radialGradient>
        <linearGradient id="paint1_linear_5:375" x1="1408.2" y1="315.405" x2="-156.092" y2="761.88" gradientUnits="userSpaceOnUse">
          <stop offset="0.0129279" stop-color="#E37777" />
          <stop offset="0.380614" stop-color="#F2554C" />
          <stop offset="0.61473" stop-color="#FEC458" />
          <stop offset="0.842802" stop-color="#FEC957" />
          <stop offset="1" stop-color="#DB788D" />
        </linearGradient>
      </defs>
    </svg >
  )
};

export default Landing