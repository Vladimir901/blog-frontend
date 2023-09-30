import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Header from './components/Header.jsx'
import TitlePage from './components/TitlePage.jsx'
import AuthForm from './components/AuthForm.jsx'
import Blog from './components/Blog.jsx'
import PostForm from './components/PostForm.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TitlePage />,
      },
      {
        path: "/auth",
        element: <AuthForm />,
      },
      {
        path: "/blog",
        element: <Blog />,
        children:[
          // {
          //   path:"/blog/:postId",
          //   element: <PostForm />
          // }
        ]
      },
      {
        path:"/blog/:postId",
        element: <PostForm />
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} fallbackElement={<></>} />{/* fallback = skeleton */}
  </>
)
