import { Navigate } from "react-router-dom";
import Basket from "../Pages/Basket";
import Catalog from "../Pages/Catalog";
import Entrance from "../Pages/Entrance";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Info from "../Pages/Info";
import Resume from "../Pages/Resume";
import Reviews from "../Pages/Reviews";
import Stocks from '../Pages/Stocks';

export const privateRoutes  = [
    { exact: true, path: "/furniture-store", element: <Entrance />, key: "0.1" },
    { exact: true, path: "", element: <Home/>, key: "1" },
    { exact: true, path: "/catalog", element: <Catalog/> , key: "2" },
    { exact: true, path: "/entrance", element: <Entrance/> , key: "3" },
    { exact: true, path: "/resume", element: <Resume/> , key: "4" },
    { exact: true, path: "/reviews", element: <Reviews/> , key: "5" },
    { exact: true, path: "/stocks", element: <Stocks/>, key: "6" },
    { exact: true, path: "/error", element: <Error/>, key: "7" },
    { exact: true, path: "/info", element: <Info/> , key: "8" },
    { exact: true, path: "/home", element: <Home />, key: "9" },
    { exact: true, path: "/basket", element: <Basket/>, key: "10" },
    { exact: true, path: "*", element: <Navigate to="/error" replace />, key: "end" },
    
    
]

export const publicRoutes = [
    { exact: true, path: "", element: <Home/>, key: "1" },
    { exact: true, path: "/entrance", element: <Entrance/> , key: "3" },
    { exact: true, path: "/error", element: <Error/>, key: "7" },
    { exact: true, path: "/home", element: <Home />, key: "9" },
    { exact: true, path: "*", element: <Navigate to="/error" replace />, key: "end" },
    
]

// в packge.json  изменить на "homepage": " https://alekseiget.github.io/furniture-store/",