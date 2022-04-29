// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import UsersLayout from 'src/layouts/UsersLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import EthLayout from 'src/layouts/EthLayout'
import EthContext from 'src/context/EthContext'

const userRouteParamTypes = {
  dir: {
    constraint: /.*/,
  },
}

const Routes = () => {
  return (
    <Router trailingSlashes={'preserve'} paramTypes={userRouteParamTypes}>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Private unauthenticated="home">
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Private>
      <Set wrap={[EthContext, EthLayout]}>
        <Route path="/repo/{repoName:String}/directory/{path:dir}" page={DirectoryPage} name="directory" />
        <Route path="/repo/{repoName:String}/file/{filePath:dir}" page={FilePage} name="file" />
        <Route path="/repo/{repoName:String}" page={RepoPage} name="repo" />
        <Route path="/repos" page={ReposPage} name="repos" />
      </Set>
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/user/{id:String}" page={UserUserPage} name="user" />
      <Route path="/users/new/{id:String}" page={UserNewUserPage} name="newUser" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
