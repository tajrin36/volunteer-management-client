import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Signin from "../pages/authentication/Signin";
import Register from "../pages/authentication/Register";
import AllVolunteers from "../pages/AllVolunteers";
import PrivateRoute from "./PrivateRoute";
import AddVolunteerNeed from "../pages/AddVolunteerNeed";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allVolunteer',
                element: <AllVolunteers></AllVolunteers>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addVolunteerNeed',
                element: (
                    <PrivateRoute>
                        <AddVolunteerNeed></AddVolunteerNeed>
                    </PrivateRoute>
                ),
            },
        ]
    }
])
export default router;