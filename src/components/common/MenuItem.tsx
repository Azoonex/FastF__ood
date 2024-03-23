
import { useThemContent } from "../../context/context"

function MenuItem() {
    const shopContentx = useThemContent();
    const addShopFood = shopContentx.addShop;

  return (
    <div>
          <div className="alert alert-dark" role="alert">
             You adding for cureent add for Shops {addShopFood}
          </div>
    </div>
  )
}

export default MenuItem
