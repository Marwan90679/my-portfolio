import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './Page/Home.jsx';
import MainLayout from './Layout/MainLayout.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[{
      index:true,
      
      Component:Home
    }]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
  </StrictMode>,
)
