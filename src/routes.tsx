import {
    ShopFood,
    CardShop
} from './components'

let routes = [
    { path: '/shopfood', element: <ShopFood />},
    {
        path: '/shopFast/:Card', element: <CardShop />
    }
]

export default routes