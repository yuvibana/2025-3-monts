import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Layout from "./Layout"
import Day1 from './components/Day1/day1.tsx'
import Day2 from './components/day2/day2.tsx'
import Day2P1 from './components/day2/day2P1.tsx'
import Day2CalCalculater from './components/day2/day2CalCalculater.tsx'
import Day3 from './components/Day3/Day3'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Day1 name='Async Dev' age={24} />} />
      <Route path='day2' element={
        <div>
          <h3 style={{ color: "rgb(24, 94, 170)", fontStyle: "italic" }}># Day Two: Functions & Type Aliases in TypeScript</h3>
          <Day2 />
          <h4 style={{ color: "#333", fontStyle: "italic" }}># Day Two: 2.1</h4>
          <Day2P1 />
          <h4 style={{ color: "#333", fontStyle: "italic" }}># Day Two: 2.2 {"=>"} Proj</h4>
          <Day2CalCalculater />
        </div>
      } />
      <Route path='day3' element={<>
        <Day3 />
      </>} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
