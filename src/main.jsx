import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Authors from './pages/Authors'
import Login from './pages/Login'
import Logout from './pages/Logout'
import PostDetail from './pages/PostDetail'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import AuthorPost from './pages/AuthorPosts'
import CategoryPosts from './pages/CategoryPosts'
import Dashboard from './pages/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: 'posts/:id', element: <PostDetail /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'profile/:id', element: <UserProfile /> },
      { path: 'authors', element: <Authors /> },
      { path: 'create', element: <CreatePost /> },
      { path: 'posts/categories/:category', element: <CategoryPosts /> },
      { path: 'posts/users/:id', element: <AuthorPost /> },
      { path: 'myposts/:id', element: <Dashboard /> },
      { path: 'posts/:id/edit', element: <EditPost /> },
      { path: 'logout', element: <Logout /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
