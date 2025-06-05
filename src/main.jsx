import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider } from 'react-router-dom'
import Router from './Router.jsx'
import Provider from './Comp/Provider.jsx'

createRoot(document.getElementById('root')).render(
  <Provider>
    <StrictMode>
           <RouterProvider router={Router}/>
    </StrictMode>
  </Provider>
)
