import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";

import Home from '../pages/Index.jsx';
import About from '../pages/About.jsx';
import Blog from '../pages/blogs/index.jsx';
import DetailBlog from '../pages/blogs/_id.jsx'

import {posts,postById} from '../apis/loaders.js'
import ErrorPage from "../components/ErrorPage.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/blogs",
                element: <Blog/>,
                loader: posts
            },
            {
                path : "/blogs/:id",
                element : <DetailBlog/>,
                loader : postById
            }
        ]

    }  
]);