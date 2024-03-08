import { useEffect, useState } from "react"

export default function ShopFood() {
  const [dataPost,setDataPost] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setDataPost(data))
  })
  
  return (
    <div className="card w-100 d-flex flex-row h-auto ">
        {
          dataPost.map((item:any) => {
            return (
              <div className="container mx-auto my-5">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.body}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
        </div>
            )
          })
        }
      </div>
  )
}

