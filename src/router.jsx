import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout, PrivateLayout, PublicLayout} from "./layouts/index.js";
import {AboutPage, ContactsPage, HomePage, PayDeliveryPage, ReturnPage} from "./pages/index.js";


const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'/home'}/>},
            {path: "/home", element: <HomePage/>},
            {path: "/about", element: <AboutPage/>},
            {path: "/delivery", element: <PayDeliveryPage/>},
            {path: "/return", element: <ReturnPage/>},
            {path: "/contacts", element: <ContactsPage/>},

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