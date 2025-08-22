import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout, PrivateLayout, PublicLayout} from "./layouts/index.js";
import {HomePage} from "./pages/index.js";


const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'/home'}/>},
            {path: "/home", element: <HomePage/>},

            {
                element: <PublicLayout/>, children: []
            },
            {
                element: <PrivateLayout/>, children: []
            }
        ]
    },
]);

export default router;