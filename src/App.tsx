import React, { useEffect, useState } from "react"
import Navbar from './components/layout/Navbar'
import axios from "./axios";
import FastFoodList from "./components/FastFoodList";
import Loding from "./components/Loding";
import SearchBar from "./components/SearchBar";
import notFound from '../public/notfound.png'
import { useThemContent } from "./context/context";
import routes from './routes.tsx';
import { useRoutes } from "react-router-dom";

const App: React.FC = () => {
  const [isLoding, setLoding] = useState(false);
  const [fastFoodItem, setFastFoodItem] = useState([])


  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async (categoryId = null) => {
    setLoding(true);
    const response = await axios.get(`/FastFood/list/${categoryId ? '?categoryId=' + categoryId : ''}`)
    setLoding(false);
    setFastFoodItem(response.data);
  }


  const filterItems = (categoryId) => {
    fetchData(categoryId);

  }

  const searchItem = async (term) => {
    setLoding(true);
    const response = await axios.get(`/FastFood/search/${term ? '?term=' + term : ''}`);
    setLoding(false)
    setFastFoodItem(response.data)
  }

  const them = useThemContent()
  const darkMode = them.darkMode;

  let router = useRoutes(routes)

  return (
    <div className={`${darkMode ? 'bg-dark' : 'bg-light ' }`}>
      <Navbar filterItems={filterItems} >
        <SearchBar searchItem={searchItem} />
      </Navbar>
      <div className="container mt-4">
        {
          isLoding ? (
            <Loding theme="primary" />
          ) :

            fastFoodItem.length === 0 ? (
              <>
                <div className="alert alert-warning mt-5 text-center fadeinhorz">
                  ..برای کلید واژه فوق هیچ ایتمی یافت نشد
                </div>
                <img
                  src={notFound}
                  alt="notfound"
                  className="mx-auto mt-2 d-block h-50 fadeinhorz" />
              </>
            )
              : (
                <FastFoodList fastFoodeItems={fastFoodItem} />
              )
        }
      </div>
      {router}
    </div>
  )
}

export default App
