import { useState, useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'

import { Link } from '@redwoodjs/router'
import qs from 'qs'
import axios from 'axios'

import Account from 'src/components/Account'
import Auth from 'src/components/Auth'

const changeHandler = (e, setLogin) => {
  setLogin(e.target.value)
}

const Authenticate = async ({
  supabase,
  currentUser,
  logOut,
  isAuthenticated,
}) => {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'github',
    scopes: 'user',
  })
  console.log({ currentUser, logOut, user, session, error, isAuthenticated })
  return isAuthenticated
}

const HomePage = (params) => {
  const { client: supabase, currentUser, logOut, isAuthenticated } = useAuth()
  console.log({ supabase, currentUser, logOut, isAuthenticated })
  // Authenticate({ supabase, currentUser, logOut, isAuthenticated })
  const [isClientAuthenticated, setIsClientAuthenticated] = useState(false)
  useEffect(() => {
    if (!isAuthenticated) {
      const nextIsAuthenticated = Authenticate({
        supabase,
        currentUser,
        logOut,
        isAuthenticated,
      })
    }
    //   setIsClientAuthenticated(nextIsAuthenticated)
  }, [])
  const queryString = window.location.search
  console.log({ queryString })
  const { code } = qs.parse(queryString, { ignoreQueryPrefix: true })
  console.log('CODE: ', code)
  // if (code) {
  //   const accessToken = axios.get(
  //     `https://gitty.interpretations.dev/access?code=${code}`
  //   )
  //   accessToken
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log({ err }))
  // }
  // const [login, setLogin] = useState('')
  return (
    <>
      {/* {!isAuthenticated ? <Auth /> : <Account />} */}
      <Auth />
      {/* <ul>Gitty takes inspiration from Github</ul>
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
        code is an asset that offers utility, and that is how it derives it's
        value, even though it is free to use
      </ul>
      <ul>
        If one of afforementioned points proves to contribute to a poor
        incentive structure... it will be reevaluated
      </ul>
      <Link to="/repos">Check it out</Link>
      <div>
        <a href="https://discord.gg/SZGGsmXkbX">Discord Server</a>
      </div>
      <input type="text" onChange={(e) => changeHandler(e, setLogin)} />
      <a
        href={`https://github.com/login/oauth/authorize?client_id=Iv1.75505cdc084078d2&login=${login}`}
      >
        Sign in
      </a> */}
    </>
  )
}

export default HomePage
