import { useEffect, useState } from "react"
import axios from "../../axios"
import FastFoodItem from "./FastFoodItem"
import Loding from "../common/Loding"
import SearchBar from "../common/SearchBar"
import notFound from '../../../public/notfound.png'
import { useThemContent } from "../../context/context"
import Navbar from "../layout/Navbar"
import FastFoodList from "./FastFoodList"
import { Link } from "react-router-dom"


function Home() {
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

  return (
    <div>
          <Navbar filterItems={filterItems} >
              <SearchBar searchItem={searchItem} />
              <Link to="/shopfood">shopfood page</Link>
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
    </div>
  )
}

export default Home
