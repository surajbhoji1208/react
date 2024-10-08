import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error";
import RestorentMenu from "./components/RestorentMenu";


const AppLayout = ()=>
{
  return <div className="app"><Header></Header><Outlet/></div>
  
}

const Grocery = lazy(() => import("./components/Grocery"));

const appRouts = createBrowserRouter(
  [{
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>,
        errorElement:<Error/>
      },
      {
        path:'/about',
        element:<About/>,
        errorElement:<Error/>
      },
      {
        path:'/contact',
        element:<Contact/>,
        errorElement:<Error/>
      },
      {
        path:'/grocery',
        element:<Suspense fallback={<h1>loadddinnng....</h1>}><Grocery/></Suspense>,
        errorElement:<Error/>
      },
      {
        path:'/restaurant/:id',
        element:<RestorentMenu/>,
        errorElement:<Error/>
      }
    ],
    errorElement:<Error/>
  },
 
]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouts}/>);
