import {
    Home,
} from './components';
import ShopFood from './page/ShopFood';
import CardShop from './page/CardShop';
import Login from './page/Login';


let routes = [
    {path : "/", element : <Home />},
    { path: '/shopfood', element: <ShopFood />},
    {
        path: '/shopFast/Card', element: <CardShop />
    },
    {
        path: '/login', element: <Login />
    }
]

export default routes