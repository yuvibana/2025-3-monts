import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import Layout from './Layout'
import UseState from './pages/useStateHook/index.jsx'
import UseEffect from './pages/useEffectHook/Index.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />}>
      <Route path='' element={<h1>Home</h1>} />
      <Route path='useStateHook' element={<UseState />} />
      <Route path='useEffectHook' element={<UseEffect />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
