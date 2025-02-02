import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import HeaderComponent from './Components/HeaderComponent';
import Body from './Components/Body';
//import About from './Components/About';
import Error from './Components/Error';
import Contact from './Components/Contact';
import Service from './Components/Service';
//import Grocery from './Components/Grocery';
import RestaurantMenu from './Components/RestaurantMenu';
//we are importing the createBrowserRouter as Router, RouterProvider as Routes ,Outlet as Route from react-router-dom
//Function of createBrowserRouter is to create a BrowserRouter
//Function of RouterProvider is to provide the routes
//Function of Outlet is to render the routes
import {createBrowserRouter , RouterProvider  ,Outlet} from 'react-router-dom';
export * from "react-router-dom";

//Lazy loading of components
const Grocery =lazy(()=>import('./Components/Grocery'));
const About=lazy(()=>import('./Components/About'));


const MainLayOut = () =>
{
    return(
        <div className='NoNeed'>
                <HeaderComponent/>
                <Outlet/>
        </div>    
    )
}

//appRouter is the object of list of routes created by using createBrowserRouter function
//Need to pass this appROuter object inside the RouterProvider
const appRouter = createBrowserRouter([
    {
        //Parent Route
        //Always keep parent as '/' and element as MainLayout
        path: '/',
        element: <MainLayOut />,


        //Child Routes
        children: [
            {
                path: 'Body', // Relative path for Body (defaults to /Body)
                element: <Body />
            },
            {
                path: 'about', // Relative path (resolves to /Body/about)
                element: <Suspense fallback={'Loading'}><About /></Suspense>
            },
            {
                path: 'contact', // Relative path (resolves to /Body/contact)
                element: <Contact />
            },
            {
                path: 'Grocery', // Relative path (resolves to /Body/contact)
                element: <Suspense fallback={'Loading..!'}><Grocery /></Suspense>
            },
            {
                path:'service',
                element:<Service/>
            },
            {
                //Building the dynamic routing for restaurant menu 
                //Here we are passing resId as a parameter
                path: '/restaurants/:resId',
                element:<RestaurantMenu/>
            }
        ]
    },
    //Error route
    {
        path: '*', // Catch-all for undefined routes
        element: <Error />
    }
]);

const root =ReactDOM.createRoot(document.getElementById('MainClass'));
//passing the appRouter object to the RouterProvider
root.render(<RouterProvider router={appRouter}/>);

