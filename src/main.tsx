import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Home } from './routes/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Repos } from './routes/Repos.tsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      { path: '/repos', element: <Repos />, }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
