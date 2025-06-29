import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './Page/Home.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import ProjectDetails from './Components/Projects/ProjectDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[{
      index:true,
      Component:Home
    },
  {
    path:'project/:id',
  Component:ProjectDetails
  }]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
  </StrictMode>,
)
