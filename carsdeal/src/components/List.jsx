import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import axios from 'axios'

export const List = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("");
    const [filter, setFilter] = useState([]);


    const fetchData = () =>{
        if(!sort){
            axios.get(`http://localhost:3004/mobiles?_page=${page}&_limit=8`)
            .then(res => setData(res.data))
        }
        else
        {
        axios.get(`http://localhost:3004/mobiles?_page=${page}&_limit=8&_sort=price&_order=${sort}`)
        .then(res => setData(res.data)) 
        }
    }

    useEffect(() => {
       fetchData();
      }, [page,sort])
    

   const handleFilter = (item) => {
        if(filter.includes(item))
        {
            const handleArr = filter.filter((el) => el !== item);
            setFilter(handleArr);   
        }
        else
        {
            const handleArr = [...filter];
            handleArr.push(item);
            setFilter(handleArr);
        }
    }


  return (
        <div>
            <div>
                <button onClick={() => setSort("asc")}>Asc</button>
                <button onClick={() => setSort("desc")}>Desc</button>
                <button onClick={() => setSort("")}>Dont Sort</button>
            </div>
            <div>
                <button onClick={() => handleFilter("BMW")}>BMW</button>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"auto auto auto", gap: "10px"}}>
                {
                    data.map((el) => 
                        <Card {...el} />
                    )
                }
            </div>
            <div>
                <button disabled={page==1} onClick={() => setPage(page-1)}>Prev</button>
                <button disabled>{page}</button>
                <button onClick={() => setPage(page+1)}>Next</button>
            </div>
        </div>
  )
}

