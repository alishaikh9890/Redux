import { useEffect, useState } from "react"
import axios from "axios"

export const useFetchProducts = (url, page, sort, ratingFilter) => {

     const [products, setProducts] = useState({
            loading:false,
            error:false,
            data:[]
      })

      const {loading, error, data} = products;


      const getProds = (url, page, sort, ratingFilter) =>{

        const paramsObj={
          _page : page
        };

        if(sort){
          paramsObj._sort = "price";
          paramsObj._order = sort;
        }

        if(ratingFilter.length){

          const max = Math.max(...ratingFilter);
          const min = Math.min(...ratingFilter);
          paramsObj._sort = "rating";
          paramsObj._order = "desc";
          
          if(max === min){
            paramsObj.rating_gte = min;
            paramsObj.rating_lte = min +1;
          }
          else 
          {
            paramsObj.rating_gte = max;
            paramsObj.rating_lte = max + 1;
          }
        }


           setProducts(prev => ({
                ...prev,
                loading:true
              }))
              axios({
                method:"get",
                url,
                params:paramsObj
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
        getProds(url, page, sort, ratingFilter)
      },[page, sort, ratingFilter])


      return {loading, error, data}
}