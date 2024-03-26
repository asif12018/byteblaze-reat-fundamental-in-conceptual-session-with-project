import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import ErrorPge from "../pages/ErrorPge"
import Home from "../pages/Home"
import Blogs from "../pages/Blogs"
import Bookmarks from "../pages/Bookmarks"
import Blog from "../pages/Blog"
import Author from "../components/Author"
import Content from "../components/Content"


export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPge></ErrorPge>,
      children: [
        {
           path:'/',
           element:<Home></Home>
        },
        {
          path: '/blogs',
          loader:()=>fetch('https://dev.to/api/articles?per_page=20&to=7'),
          element: <Blogs></Blogs>
        },
        {
          path: '/bookmarks',
          
          element: <Bookmarks></Bookmarks>
        },
        {
          path:'/blogs/:id',
          element: <Blog></Blog>,
          loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index:true,
                element:<Content></Content>,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:'author',
                element:<Author></Author>,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
          
        }
      ]
    }
  ])