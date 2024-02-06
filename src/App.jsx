import React from 'react'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';



let Routers = createBrowserRouter ([
  {path : '' , element : <Layout/> , children : [
    {index: true , element : <Home/>},
    {path : 'about' , element : <About/>},
      {path : 'portfolio' , element : <Portfolio/>},
      {path : 'contact' , element : <Contact/>},
      {path : '*' , element : <NotFound/>}
  ]}
]) 


export default function App() {
return <>
  <RouterProvider router={Routers}></RouterProvider>
</>
}
