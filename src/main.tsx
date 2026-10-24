import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage/index.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AboutUsPage from './pages/AboutUs/index.tsx';

let router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about-us",
    Component: AboutUsPage,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
