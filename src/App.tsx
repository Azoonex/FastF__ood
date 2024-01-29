import React, { useEffect, useState } from "react"
import "./assets/sass/_app.scss"
import Navbar from './components/layout/Navbar'
import axios from "./axios";
import FastFoodList from "./components/FastFoodList";
import Loding from "./components/Loding";

const App : React.FC =()=> {
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



  return (
    <div>
      <Navbar />
      <div className="container mt-4">
      {
        isLoding ? (
            <Loding theme="primary" />
        ) : (
          <FastFoodList fastFoodeItems={fastFoodItem} />
        )
      }
      </div>
    </div>
  )
}

export default App
