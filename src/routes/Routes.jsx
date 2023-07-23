import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllCollege from "../pages/AllCollege/AllCollege";
import Admission from "../pages/Admission/Admission";
import MyCollege from "../pages/MyCollege/MyCollege";
import Form from "../pages/Form/Form";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "allCollege",
                element: <AllCollege></AllCollege>
            },
            {
                path: "admission",
                element: <Admission></Admission>
            },
            {
                path: "myCollege",
                element: <MyCollege></MyCollege>
            },
            {
                path: "form",
                element: <Form></Form>
            }
        ]
    },
]);

export default router;