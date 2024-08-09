import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error";

const AppLayout = ()=>
{
  return <div className="app"><Header></Header><Outlet/></div>
  
}

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
      }
    ],
    errorElement:<Error/>
  },
 
]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouts}/>);
