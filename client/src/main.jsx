import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, useOutletContext, redirect, useParams } from 'react-router-dom'

import { UserContext } from './context/UserProvider.jsx'

import UserProvider from './context/UserProvider.jsx'

//Layouts
import RootLayout from './pages/RootLayout.jsx'
//Pages

import ErrorPage from './errorPage.jsx'
import HomePage from './pages/home/HomePage.jsx'
import LoginPage from './pages/login/loginPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {path: '/', element: <HomePage/>},
      {path: '/login', element: <LoginPage/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <UserProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </UserProvider>
)
