import { createBrowserRouter } from "react-router-dom";
import { CasePage } from "./pages/CasePage/CasePage";
import { HomePage } from "./pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/:case',
        element: <CasePage />
    }
])