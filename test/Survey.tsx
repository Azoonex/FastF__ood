import { useEffect, useState } from "react";
import usePaginatedFech from "../hook/usePaginatedFech"
import Loding from "./Loding";

const url = 'https://react-mini-projects-api.classbon.com/Programmer/programmers';

function Survey() {
  const [loading,data] = usePaginatedFech(url, 3);
  const [page,setPage] = useState(1);
  const {programers,setProgramers} = useState([]);

  useEffect(()=>{
    if(loading) return;
    setProgramers(data[page - 1]);
  },[loading])
  return (
    <div className="container mx-auto bg-success h-25">
      <h2 className="text-center text-info ">محبوبترین غذا ها</h2>
      {
        loading && (
          <Loding theme="dark" />
        )
      }

      {
        !loading && (
          <div className="row d-flex justify-content-center ">
            {
              programers.map(( id, ...programer )=>{
                return (
                  <div className="col-3" key={id}>
                    programer
                  </div>
                )
                })
            }
          </div>
        )
      }
    </div>
  )
}

export default Survey
