import { useEffect, useState } from "react"
import axios from "axios"

export const useFetchProducts = (url) => {

     const [products, setProducts] = useState({
            loading:false,
            error:false,
            data:[]
      })

      const {loading, error, data} = products;


      const getProds = (url) =>{
           setProducts(prev => ({
                ...prev,
                loading:true
              }))
              axios({
                method:"get",
                url
              }).then(res=> setProducts(prev => ({
                ...prev,
                loading:false,
                error:false,
                data : res.data
              })))
              .catch(err=> setProducts(prev =>({
                ...prev,
                loading:false,
                error:true   
              })))
      }

      useEffect(()=>{
        getProds(url)
      },[])


      return {loading, error, data}
}