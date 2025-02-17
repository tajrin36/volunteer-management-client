import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Signin from "../pages/authentication/Signin";
import Register from "../pages/authentication/Register";
import AllVolunteers from "../pages/AllVolunteers";
import PrivateRoute from "./PrivateRoute";
import AddVolunteerNeed from "../pages/AddVolunteerNeed";
import MyVolunteerNeedPost from "../pages/MyVolunteerNeedPost";
import UpdatePost from "../pages/UpdatePost";
import VolunteerPostDetails from "../pages/VolunteerPostDetails";
import BeAVolunteer from "../pages/BeAVolunteer";


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
            {
                path: '/myVolunteerNeed',
                element: (
                    <PrivateRoute>
                        <MyVolunteerNeedPost></MyVolunteerNeedPost>
                    </PrivateRoute>
                ),
            },
            {
                path: '/update/:id',
                element: (
                    <PrivateRoute>
                        <UpdatePost></UpdatePost>
                    </PrivateRoute>
                ),
            },
            {
                path: '/volunteer/:id',
                element: (
                    <PrivateRoute>
                        <VolunteerPostDetails></VolunteerPostDetails>
                    </PrivateRoute>
                ),
            },
            {
                path: '/beAVolunteer/:id',
                element: (
                    <PrivateRoute>
                        <BeAVolunteer></BeAVolunteer>
                    </PrivateRoute>
                ),
            },
        ]
    }
])
export default router;