import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import Layout from './Layout'
import UseState from './pages/useStateHook/index.jsx'
import UseEffect from './pages/useEffectHook/Index.jsx'
import UseContext from './pages/useContextHook/Index.jsx'
import UseReducer from './pages/useReducerHook/Index.jsx'
import UseCallback from './pages/useCallback/Index.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />}>
      <Route path='' element={<h1>Home</h1>} />
      <Route path='useStateHook' element={<UseState />} />
      <Route path='useEffectHook' element={<UseEffect />} />
      <Route path='UseContextHook' element={<UseContext />} />
      <Route path='UseReducerHook' element={<UseReducer />} />
      <Route path='UseReducerHook' element={<UseReducer />} />
      <Route path='UseCallbackHook' element={<UseCallback />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
)
