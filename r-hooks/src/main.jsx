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
import UseMemo from './pages/useMemoHook/Index.jsx'
import UseRef from './pages/useRefHook/Index.jsx'
import UseImperativeHandle from './pages/useImperativeHandleHook/Index.jsx'
import UseLayoutEffect from './pages/useLayoutEffect/Index.jsx'
import UseTransition from './pages/useTransitionHook/Index.jsx'
import UseSyncExternalStore from './pages/useSyncExternalStore/Index.jsx'
import UseInsertionEffect from './pages/useInsertionEffect/Index.jsx'
import UseCustomHook from './pages/useCustomHook/Index.jsx'
import UseSessionStorage from './pages/useSessionStorage/Index.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />}>
      <Route path='' element={<h1>Home</h1>} />
      <Route path='useStateHook' element={<UseState />} />
      <Route path='useEffectHook' element={<UseEffect />} />
      <Route path='UseContextHook' element={<UseContext />} />
      <Route path='UseReducerHook' element={<UseReducer />} />
      <Route path='UseCallbackHook' element={<UseCallback />} />
      <Route path='UseMemokHook' element={<UseMemo />} />
      <Route path='UseRefkHook' element={<UseRef />} />
      <Route path='UseImperativeHandlekHook' element={<UseImperativeHandle />} />
      <Route path='UseLayoutEffect' element={<UseLayoutEffect />} />
      <Route path='UseTransition' element={<UseTransition />} />
      {/* useId Skipped */}
      <Route path='useSyncExternalStore' element={<UseSyncExternalStore />} />
      <Route path='useInsertionEffect' element={<UseInsertionEffect />} />
      <Route path='useCustomHook' element={<UseCustomHook />} />
      <Route path='useSessionStorage' element={<UseSessionStorage />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
)
