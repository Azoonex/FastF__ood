import {
    ShopFood,
    CardShop,
    Home
} from './components'


let routes = [
    {path : "/", element : <Home />},
    { path: '/shopfood', element: <ShopFood />},
    {
        path: '/shopFast/Card', element: <CardShop />
    }
]

export default routes