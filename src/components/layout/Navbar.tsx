import { useEffect,useState } from "react";
import "../../assets/sass/_navbar.scss"
import axios from "../../axios";
import Loding from "../Loding";

const Navbar:React.FC = ()=> {
  const [loading,setLoding] = useState(true)
  const [navList,setNavList] = useState([]) 

  useEffect(()=>{
    const fetchCategories = async ()=>{
      const response = await axios.get('/FoodCategory/categories');
      setNavList(response.data);
      setLoding(false);
    }
    fetchCategories();
  },[])
  
  const renderContent = () => {
    if(loading) {
      return <Loding />
    }
  }
  return (
    <header className="">
      <h1 className="p-5 text-start  ">
        FAST FOOD CATALOGUE
      </h1>
      <nav className="w-75 d-flex align-items-center justify-content-start
      gap-1 shadow rounded-3">  
        {
          navList.map(item => (
            <a key={item.id} href="3">{item.name}</a>
          ))
        }
        <input className="form-control mx-5 d-md-block d-sm-none " type="text" placeholder="search" />
      </nav>
    </header>
  )
}

export default Navbar
