import background from "../../../public/bg-fast-food.jpg"
import { useThemContent } from "../../context/context"
import MenuItem from "../common/MenuItem";

function CardShop() {
  const shopContentx = useThemContent()
  const addShopFood = shopContentx.addShop;

  const incrementShopFood = ()=>{
    shopContentx.setAddShop((preivous:number) =>{
      return preivous + 1
    })

    console.log(addShopFood);
  }

  const decrementItemShopFood=()=>{
    shopContentx.setAddShop((preivous: number) => {
      return preivous = 1
    })
  }
  
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={background} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button"
            onClick={incrementShopFood}
            className="btn btn-primary">add food</button>
            <button type="button"
            onClick={decrementItemShopFood}
            className="btn btn-primary">RemoveShopCard</button>
          </div>
      </div>
      <MenuItem />
    </div>
  )
}

export default CardShop

