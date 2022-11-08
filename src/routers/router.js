import { createBrowserRouter } from "react-router-dom";
import Allservice from "../allservice/Allservice";
import Home from "../home/Home";
import Main from "../main/Main";

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
        }
    ]
}
])