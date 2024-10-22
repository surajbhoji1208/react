import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error";
import RestorentMenu from "./components/RestorentMenu";
import { UserContext } from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const AppLayout = ()=>{
  /**
   * Setting new value to user context 
   */
  
    const [userName, setUserName] = useState(null);
    
    useEffect(()=>{
      const data = {userName:"New name"}
      setUserName(data.userName)
    },[])

    return (
      <Provider store={appStore}>
      <UserContext.Provider value={{ userName: userName ,setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
    );
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
      },
      {
        path:'/cart',
        element:<Cart/>,
        errorElement:<Error/>
      }
    ],
    errorElement:<Error/>
  },
 
]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouts}/>);
