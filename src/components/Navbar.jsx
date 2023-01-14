import React from 'react'
import style from "../style/navbar.module.css"

const Navbar = () => {
  return (
    <div className={style.nav_container}>
        <ul style={{cursor:"pointer"}}>TeeRex Store</ul>
        <div className={style.nav_right_section}>
            <ul style={{cursor:"pointer"}}>Products</ul>
            <img style={{cursor:"pointer"}} width={"8%"} src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
        </div>
    </div>
  )
}

export default Navbar