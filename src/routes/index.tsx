//REACT
import { Suspense } from 'react';
//PAGES
import {
    //Layout
    Home,
    //AuthLayout
    Login, Signup, ForgotPassword
} from '../pages';
//REACT-ROUTER-DOM
import { createBrowserRouter } from 'react-router-dom';
//LAYOUTS
import Layout from '../components/layouts/Layout';
import AuthLayout from '../components/layouts/AuthLayout';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={null}> <Home /> </Suspense>
            }
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Suspense fallback={null}> <Login /> </Suspense>
            },
            {
                path: "signup",
                element: <Suspense fallback={null}> <Signup /> </Suspense>
            },
            {
                path: "forgot-password",
                element: <Suspense fallback={null}> <ForgotPassword /> </Suspense>
            }
        ]
    },
    {
        path: "*",
        element: <Suspense fallback={null}> <>404</> </Suspense>
    }        
]);