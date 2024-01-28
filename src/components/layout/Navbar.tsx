import { useEffect,useState } from "react";
import "../../assets/sass/_navbar.scss"
import axios from "../../axios";

const Navbar:React.FC = ()=> {

  const [navList,setNavList] = useState([]) 

  useEffect(()=>{
    const fetchCategories = async ()=>{
      const response = await axios.get('/FoodCategory/categories');
      setNavList(response.data);
    }
    fetchCategories();
  },[])
  

  return (
    <header className="">
      <h1 className="p-5 text-start  ">
        FAST FOOD CATALOGUE
      </h1>
      <nav className="w-75 d-flex align-items-center justify-content-start
      gap-1 shadow rounded-3">  
        {
          navList.map(item => (
            <a href="3">{item.name}</a>
          ))
        }
      </nav>
    </header>
  )
}

export default Navbar
