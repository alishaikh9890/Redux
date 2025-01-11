import React from 'react'

function Card() {
  return (
    <div className={CardStyles.CardContainer}>
        <div className={CardStyles.imgDiv}>
            <img src="https://imgd.aeplcdn.com/664x374/cw/ec/10766/Ferrari-California-Right-Front-Three-Quarter-61993.jpg?v=201711021421&q=80" alt="" />
        </div>
        <div className={CardStyles.detailsDiv}></div>
    </div>
  )
}

export default Card