import {
    Home,
} from './components';
import ShopFood from './page/ShopFood';
import CardShop from './page/CardShop';
import LoginMain from './page/LoginMain';
import Register from './page/Register';


let routes = [
    {path : "/", element : <Home />},
    { path: '/shopfood', element: <ShopFood />},
    {
        path: '/shopFast/Card', element: <CardShop />
    },
    {
        path: '/login', element: <LoginMain />
    },
    {
        path: '/register',element : <Register />
    }
]

export default routes