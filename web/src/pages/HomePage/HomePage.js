import { useState, useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'

import { Link, routes } from '@redwoodjs/router'

import Auth from 'src/components/Auth'

const changeHandler = (e, setLogin) => {
  setLogin(e.target.value)
}
async function checkUser({ supabase, setUser }) {
  const user = await supabase.auth.user()
  console.log({ user })
  setUser(user)
}

async function signInWithGithub({ supabase }) {
  await supabase.auth.signIn({
    provider: 'github',
  })
}
async function signOut({ supabase, setUser }) {
  await supabase.auth.signOut()
  setUser(null)
}

const HomePage = (params) => {
  const [user, setUser] = useState(null)
  const { client: supabase } = useAuth()

  useEffect(() => {
    checkUser({ supabase, setUser })
  }, [])

  return (
    <>
      {user ? (
        <>
          <>Welcome, {user.email}</>{' '}
          <button onClick={() => signOut({ supabase, setUser })}>
            Sign Out
          </button>{' '}
        </>
      ) : (
        <Auth supabase={supabase} />
      )}
      <ul>Gitty takes inspiration from Github</ul>
      <ul>Gitty exists to help incentivize open source software development</ul>
      <ul>
        Ethereum contracts seem to make it a lot easier to develop what Gitty is
        trying to do
      </ul>
      <ul>
        Specifically, Ethereum enables select equity holders to only increase
        the number of holders after they've voted... and handles a lot of that
        development work for you
      </ul>
      <ul>
        Gitty provides a means by which core contributors can have financial
        stake in their project{' '}
      </ul>
      <ul>
        When an individual has demonstrated to core contributors that they can
        offer technical, legal/administrative, or financial support to their
        project, the core developers can give them equity in their repo in
        exchange for their offered support
      </ul>
      <ul>
        This incentivizes stake holders to increase the value of the code... the
        code is an asset that offers utility, and that is how it derives its
        value, even though it is free to use
      </ul>
      <ul>
        If one of aforementioned points proves to contribute to a poor incentive
        structure... it will be reevaluated
      </ul>
      {user ? (
        <Link to={routes.user({ id: user.id })}>Check it out</Link>
      ) : (
        <>Sign in to check it out</>
      )}
      <div>
        <a href="https://discord.gg/SZGGsmXkbX">Discord Server</a>
      </div>
    </>
  )
}

export default HomePage
