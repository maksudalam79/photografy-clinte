import { createBrowserRouter } from "react-router-dom";
import Allservice from "../allservice/Allservice";
import Deatails from "../details/Deatails";
import Home from "../home/Home";
import Login from "../login/Login";
import Main from "../main/Main";
import Registration from "../registration/Registration";

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
        }
       
    ]
}
])