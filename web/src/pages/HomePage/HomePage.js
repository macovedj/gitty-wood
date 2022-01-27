import { useEffect, useState } from 'react'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { useApolloClient } from '@apollo/client'

const GET_USER = gql`
  query HomePageGetUser($id: String!) {
    user(id: $id) {
      id
    }
  }
`

const CREATE_USER = gql`
  mutation HomePageCreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      repos
    }
  }
`

const HomePage = () => {
  const {
    isAuthenticated,
    logIn,
    logOut,
    loading: authLoading,
    currentUser,
  } = useAuth()
  const [loading, setLoading] = useState(false)
  const [gittyUser, setGittyUser] = useState()
  const client = useApolloClient()
  // TODO: show loading state, and handle errors
  const [createUser, /* { loading: createUserLoading, error } */] =
    useMutation(CREATE_USER)

  useEffect(() => {
    if (currentUser) {
      client
        .query({
          query: GET_USER,
          variables: { id: currentUser.sub },
        })
        .then(({ data }) => {
          if (!data.user) {
            createUser({
              variables: { input: { id: currentUser.sub, repos: [] } },
            }).then((user) => {
              setGittyUser(user)
            })
          } else {
            setGittyUser(data.user)
          }
        })
    }
  }, [currentUser])

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      {loading || authLoading ? (
        <p>Loading auth...</p>
      ) : isAuthenticated ? (
        <>
          Welcome, {currentUser.email}{' '}
          <button
            onClick={async () => {
              setLoading(true)
              setGittyUser(undefined)
              await logOut()
              setLoading(false)
            }}
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setLoading(true)
            logIn({ provider: 'github', redirectTo: 'http://localhost:8910' })
          }}
        >
          Sign in
        </button>
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
      {gittyUser ? (
        <Link to={routes.user({ id: gittyUser.id })}>Check it out</Link>
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
