import { useState,useEffect } from "react"
import { PostRequstlogin } from "../server"

const mainCotainer = {
  width: "100%",
  height: '100vh'
}

function Login() {

  const [valueText, setvalueText] = useState("")
  const [valueEmail,setValueEmail] = useState("")

  const senDataHandler = (e:Event)=>{
    e.preventDefault()

    PostRequstlogin("url",{
      name: valueText,
      email: valueEmail
    }).then(response => console.log(response))
    .catch(error => console.log(error))

  }

  return (
    <div style={mainCotainer} className="d-flex  justify-content-center align-items-center  ">
      <form className="d-flex flex-column w-50 h-50
      py-5 rounded shadow 
      bg-info align-items-center align-content-center gap-3">
        <h3 className="text-white ">وارد شوید</h3>
        <input
        onChange={(e)=> setvalueText(e.target.value)}
          value={valueText}        
        required type="text" className="w-50 form-control" />
        <input
          onChange={(e) => setValueEmail(e.target.value)}
          value={valueEmail}        
        required type="email" className="w-50 form-control" />
        <button 
        onClick={senDataHandler}
        className="btn btn-danger ">تایید کنید</button>
      </form>
    </div>
  )
}

export default Login
