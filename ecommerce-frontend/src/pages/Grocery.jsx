import axios from "axios";
import React, { useState, useEffect } from "react";
import { useFetchProducts } from "../hook/fetchProducts";
import { MediaCard } from "../components/Card";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Grocery = () => {
  const [ratingFilter, setRatingFilter] = useState([])
  const [sort, setSort] = useState(null)
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetchProducts(
    "http://localhost:8000/products?category_like=grocery", page, sort, ratingFilter
  );

  const handleSort =(type) => {
    if(sort === type){
      setSort(null)
      return;
    }
    setSort(type);
  }

  const handleFilter = (type) => {
    if(ratingFilter.includes(type)){
      const updatedFilter = [...ratingFilter].filter(el => el !== type)
      setRatingFilter(updatedFilter);
      return ;
    }
    setRatingFilter(prev => [...prev, type])
  }


  return loading ? (
    <h2>...loading</h2>
  ) : error ? (
    <h2>...error</h2>
  ) : (
    <React.Fragment>
      <div className="priceSorting">
        <Button onClick={() => handleSort("asc")} variant={sort==="asc" ? "contained" : "outlined"}>
          Asc
        </Button>
        <Button onClick={() => handleSort("desc")} variant={sort==="desc" ? "contained" : "outlined"}>
          Desc
        </Button>
        <Button onClick={() => handleFilter(4)} color="success" variant={ratingFilter.includes(4) ? "contained" : "outlined"}>
          4 to 5
        </Button>
        <Button onClick={() => handleFilter(3)} color="success" variant={ratingFilter.includes(3) ? "contained" : "outlined"}>     
             3 to 4
        </Button>
        <Button onClick={() => handleFilter(2)} color="success" variant={ratingFilter.includes(2) ? "contained" : "outlined"}>
                  2 to 3
        </Button>
      </div>
      {data.map((el) => (
        <div className="card_containerDiv">
          {" "}
          <MediaCard {...el} />
        </div>
      ))}
      <div className="btnsFlex_Pagination">
        <Button disabled={page===1} onClick={() => setPage((prev) => prev - 1)} variant="contained">
          <KeyboardArrowLeftIcon />
        </Button>
        <Button variant="contained">{page}</Button>
        <Button onClick={() => setPage((prev) => prev + 1)} variant="contained">
          <KeyboardArrowRightIcon />
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Grocery;
