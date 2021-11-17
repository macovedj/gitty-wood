// web/src/pages/HomePage/HomePage.js

import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
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
    </>
  )
}

export default HomePage
