import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import CheckOut from "../component/CheckOut/CheckOut";
import Bookings from "../component/Bookings/Bookings";
import PrivateRoute from "../component/Shared/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/bookings',
          element:
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>,
        },
        {
          path:'/checkout/:id',
          element:
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>,
          loader: ({params})=> fetch(`https://car-doctor-server-ndlqxvmmi-habibur-rahmans-projects.vercel.app/services/${params.id}`)
        }
      ]
    },
  ]);

export default router