import "../assets/sass/_fastfooditem.scss"
import { HiShoppingCart } from 'react-icons/hi'
import typeFoastFoodeProps from '../../types/type'

function FastFoodItem({ name, price, ingredients, imageUrl,dalay }: typeFoastFoodeProps) {
  return (
    <div
    style={{animationDelay: dalay + "s"}}
    className='card product-card h-100 border-0  pb-1'>
      <span className="badge badge-end badge-shadow bg-success fs-md fw-medium ">
        قیمت: {price.toLocaleString()} تومان
      </span>
      <div className="card__placeholder">
        <img className='card-img-top h-100' src={imageUrl} alt="not-found" />
      </div>
      
      <div className="card-body text-center pt-3 pb-4 d-flex flex-column ">
        <h5 className="mb-2">{name}</h5>
        <div className="fs-ms fw-bold text-muted mb-3">
            {ingredients}
        </div>
        <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
            <HiShoppingCart className='fs-5 mx-2' />
            افزودن به سبد خرید
        </button>
      </div>
    </div>
  )
}

export default FastFoodItem
