import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Outlet } from "react-router-dom"
import ScrollToTop from './components/scroll-to-top';
import NavigationBar from './components/navigation-bar';
import Footer from './components/footer';
import Home from "./pages/home"
import About from './pages/about';
import Service from './pages/services';
import Contact from './pages/contact';
function Layout(){
  return(
    <>
        <ScrollToTop/>
      <NavigationBar/>
      <main className='bg-rose-100'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}


const routes = createBrowserRouter([
    {
        path:'/',
        Component: Layout,
        children:[
            {index: true, element:<>
            <Home/>
            <About/>
            <Service/>
            <Contact/>
            </>},
        ]
    }
]);

export default function Route(){
    return(<RouterProvider router={routes}/>)
}