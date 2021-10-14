// web/src/layouts/BlogLayout/BlogLayout.js
import { Link, routes } from '@redwoodjs/router'
// import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  // const { logIn } = useAuth()
  return (
    <>
      <header>
        <nav>
          <ul>
            <li></li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
            {/* <li>
              <button onClick={logIn}>Log In</button>
            </li> */}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
