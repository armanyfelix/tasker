function ForgotPassword({ forgotPassword, setForgotPassword }) {
  return (
    <div className="pt-28">
      <form className="flex flex-col text-xl space-y-4 ">
        <input type="email" className="formInput" placeholder="Email" />
        <button className="formButton">
          Reset Password
        </button>
      </form>
      <button onClick={(e) => { e.preventDefault(); setForgotPassword(!forgotPassword) }}
        className="text-gray-400 hover:text-gray-500 font-bold mt-10 text-xl space-y-3">
        Cancel
      </button>
    </div>
  )
}

export default ForgotPassword
