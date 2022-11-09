import { createBrowserRouter } from "react-router-dom";
import Addservice from "../allservice/Addservice";
import Allservice from "../allservice/Allservice";
import Blog from "../blog/Blog";
import Deatails from "../details/Deatails";
import Home from "../home/Home";
import Login from "../login/Login";
import Main from "../main/Main";
import Registration from "../registration/Registration";
import Allreview from "../review/Allreview";
import Myreview from "../review/Myreview";

export const router=createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
            
        },
        {
            path:'/allservice',
            element:<Allservice></Allservice>
        },
        {
            path:'/allservice/:id',
            element:<Deatails></Deatails>,
            loader:({params})=>fetch(`http://localhost:5000/allservice/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/registration',
            element:<Registration></Registration>
        },
        {
            path:'/review',
            element:<Myreview></Myreview>
        },
        {
            path:'/reviews',
            element:<Allreview></Allreview>,
            loader:()=>fetch('http://localhost:5000/reviews')
        },
        {
            path:'/addservice',
            element:<Addservice></Addservice>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }

      
       
    ]
}
])