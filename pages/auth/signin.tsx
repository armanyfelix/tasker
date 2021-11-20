import { getProviders, signIn as signInProvider } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import ForgotPassword from './forgotPassword';


function signIn() {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="bg-light dark:bg-gray-600 font-mono min-h-screen max-h-screen">
      <header className="flex p-2 sm:py-5 sm:px-8 md:py-10 md:px-24 lg:px-52">
        <Link href="/">
          <a className="cursor-pointer ">
          </a>
        </Link>
      </header>
      <div className="mx-auto w-full max-w-[400px] lg:scale- space-y-4 text-center">
        <h1 className="text-5xl font-extrabold">Sign In</h1>
        {forgotPassword ? (
          <ForgotPassword forgotPassword setForgotPassword={setForgotPassword} />
        ) : (
          <>

            <div className="flex pt-7">
              <button onClick={() => signInProvider('google', { callbackUrl: "/" })}
                className="formButton">
                <img src="https://img.icons8.com/color/30/000000/google-logo.png" alt="google icon" />
                Continue with google
              </button>
            </div>
            <p className="text-xl text-gray-400 font-bold">or</p>
            <form className="flex flex-col text-xl space-y-4">
              <input type="email" id="email" className="formInput" placeholder="Email" />
              <button type="submit" className="formButton">Sign in with SAML_SSO</button>
            </form>
            <div className="text-center text-xl space-y-3">

              <button onClick={(e) => { e.preventDefault(); setForgotPassword(!forgotPassword); }} className="text-gray-400 hover:text-gray-500 font-bold">Forgot password?</button>
            </div>
            <div className="text-center text-gray-400">
              This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="hover:underline text-blue-600">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="hover:underline text-blue-600">Terms of service</a> apply.
            </div>
          </>
        )}
      </div>
    </div >
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  }
}

export default signIn;
