import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyCreateRouter from './Router/Router'
import AuthProvider from './Porvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>

   <RouterProvider router={MyCreateRouter}></RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
