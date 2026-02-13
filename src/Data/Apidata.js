import axios from "axios";
import React from 'react'
import { createContext, useEffect, useState } from "react";


const Mydata = createContext();

function Apidata({children}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      
    axios.get("https://dummyjson.com/products")
      .then((item) => {
        setData(item.data.products)
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      })
    }, [])
  return (
    <Mydata.Provider value={{data, loading, error}}>
      {children} 
    </Mydata.Provider>
  )
}

export  {Apidata, Mydata}