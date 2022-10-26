import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Main from "../Main/Main";
import Cateorey from "../Pages/Categorey/Categorey/Cateorey";
import Home from "../Pages/Home/Home/Home";
import News from "../Pages/News/News/News";
import Header from "../Pages/Shared/Header/Header";


export const routes = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ({params}) => fetch (`http://localhost:5000/news`)
      },
      {
        path: '/categorey/:id',
        element: <Cateorey></Cateorey>,
        loader: ({params}) => fetch (`http://localhost:5000/category/${params.id}`)
      },
      {
        path: '/news/:id',
        element: <News></News>,
        loader: ({params}) => fetch (`http://localhost:5000/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
   },
   

])