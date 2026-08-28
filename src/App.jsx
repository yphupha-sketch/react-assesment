import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Pages/Home"
import Owner from "./Pages/Owner";
const  router =createBrowserRouter ([{
  path :"/",                      
  element:<Layout/>,            
  errorElement :(<div className="bg-red-300"></div>), //
  children :[                     
    {path:"/", element:<Home/>},
    {path:"/Owner", element:<Owner/>}
  ]
}]);





export default function App(){
  return  <><RouterProvider router={router} /></>;
}