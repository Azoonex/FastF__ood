import { useEffect, useState } from "react";
import axios from "../../axios";
import Loding from "../Loding";


const Navbar: React.FC = ({ filterItems,children }:any) => {
  const [loading, setLoding] = useState(true)
  const [navList, setNavList] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('/FoodCategory/categories');
      setNavList(response.data);
      setLoding(false);
    }
    fetchCategories();
  }, [])

  const renderContent = () => {
    if (loading) {
      return <Loding />
    }
  }
  return (
    <header className="">
      <h1 className="p-5 text-start  ">
        FAST FOOD CATALOGUE
      </h1>
      <nav className="container d-flex align-items-center justify-content-start
       shadow rounded-3">
        <a href="#" className="w-25" onClick={() => filterItems()}>
          همه فست فودها
        </a>
        {
          navList.map(item => (
            <div key={item.id}>
              <a href="#" onClick={() => filterItems(item.id)}>
                {item.name}
              </a>
           </div>
          ))
        }
        {children}
      </nav>
    </header>
  )
}

export default Navbar
