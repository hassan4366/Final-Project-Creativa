import axios from "axios";
import React from 'react'
import { createContext, useEffect, useState } from "react";

    
const Jsondata = createContext();

function Apidata({children}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      
    axios.get("/assets/js/data.json")
      .then((item) => {
        setData(item.data)
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      })
    }, [])
  return (
    <Jsondata.Provider value={{data, loading, error}}>
      {children} 
    </Jsondata.Provider>
  )
}

export  {Apidata, Jsondata}