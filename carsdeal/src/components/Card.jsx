import React, { useEffect } from 'react'
import CardStyles from "./Card.module.css";
import { imgArr } from '../data/imagesArr';

export const Card = ({id, brand, modal, price, year, rating}) => {


  return (
    <div className={CardStyles.CardContainer}>
        <div className={CardStyles.imgDiv}>
            <img src={imgArr[id%10]} alt="" />
        </div>
        <div className={CardStyles.detailsDiv}>
          <div className={CardStyles.brand}>{brand}</div>
          <div className={CardStyles.modal}>{modal}</div>
          <div className={CardStyles.year}>{year}</div>
        </div>
        <div className={CardStyles.costDiv}>
          <div className={CardStyles.rating}>{rating} ⭐️</div>
          <div className={CardStyles.price}>₹ {price}</div>
        </div>
    </div>
  )
}
