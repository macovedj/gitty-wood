import { useState } from 'react'

const signIn = async ({ supabase }) => {
  await supabase.auth.signIn({
    provider: 'github',
  })
}

const Auth = ({ supabase }) => {
  return (
    <button onClick={() => signIn({ supabase })}>Sign in</button>
    // <div className="row flex flex-center">
    //   <div className="col-6 form-widget">
    //     <h1 className="header">Supabase + RedwoodJS</h1>
    //     <p className="description">
    //       Sign in via magic link with your email below
    //     </p>
    //     <div>
    //       <input
    //         className="inputField"
    //         type="email"
    //         placeholder="Your email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <button
    //         onClick={(e) => {
    //           e.preventDefault()
    //           handleLogin(email)
    //         }}
    //         className={'button block'}
    //         disabled={loading}
    //       >
    //         {loading ? <span>Loading</span> : <span>Send magic link</span>}
    //       </button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Auth
