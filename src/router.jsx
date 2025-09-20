import {createBrowserRouter, Navigate} from "react-router-dom";

import {AuthLayout, MainLayout, PrivateLayout, PublicLayout} from "./layouts/index.js";
import {
    AboutPage, CategoryProductsPage,
    ContactsPage,
    HomePage,
    LoginPage,
    PayDeliveryPage,
    RegistrationPage,
    ReturnPage
} from "./pages/index.js";


const router = createBrowserRouter([
    {
        element: <AuthLayout/>, children: [
            {path: "/register", element: <RegistrationPage/>},
            {path: "/login", element: <LoginPage/>},
        ]
    },

    {
        path: "/", element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'/home'}/>},
            {path: "/home", element: <HomePage/>},
            {path: "/about", element: <AboutPage/>},
            {path: "/delivery", element: <PayDeliveryPage/>},
            {path: "/return", element: <ReturnPage/>},
            {path: "/contacts", element: <ContactsPage/>},

            {
                element: <PublicLayout/>, children: [
                    {path: "/category/:id", element: <CategoryProductsPage/>},
                ]
            },
            {
                element: <PrivateLayout/>, children: []
            }
        ]
    },
]);

export default router;