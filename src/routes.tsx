import {
    Home,
} from './components';
import ShopFood from './page/ShopFood';
import CardShop from './page/CardShop';
import LoginMain from './page/LoginMain';


let routes = [
    {path : "/", element : <Home />},
    { path: '/shopfood', element: <ShopFood />},
    {
        path: '/shopFast/Card', element: <CardShop />
    },
    {
        path: '/login', element: <LoginMain />
    }
]

export default routes