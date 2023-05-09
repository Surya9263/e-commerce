import React from 'react'

const ProductCard = ({img,name,price}) => {
  return (
    <div style={{width:"60%",marginTop:"25px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <div>
            <p>{name}</p>
        </div>
        <img width={"50%"} src={img} alt="" />
        <div>
            <p>Rs {price}</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard