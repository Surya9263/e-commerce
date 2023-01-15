import React, { useEffect, useState } from 'react'
import { getData } from '../api/productsData';
import ProductCard from '../components/ProductCard';
import style from "../style/products.module.css";


const Products = () => {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        getData().then(data=>setProducts(data))
    },[])

  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
            <input type="text" />
            <img width={"20px"} src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png" alt="" />
        </div>
        <div className={style.productList}>
            {products.map((e)=><ProductCard key={e.id} img={e.imageURL} name={e.name} price={e.price} />)}
        </div>
    </div>
  )
}

export default Products