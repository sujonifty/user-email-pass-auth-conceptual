import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import SignIn from './components/SignIn/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
