import React from "react";
import "../styles/header.css";
import logo from "../media/logo-black.png";
import {SearchOutlined,UserOutlined,HeartOutlined,ShoppingOutlined} from "@ant-design/icons"
const Header = () => {
    return(
        <>
            <div className="header1">
                <p style={{fontSize:"15px"}}><i> Get <b>10% OFF</b> at the Porto Cosmetics Selection <b><u> - Shop Now!</u></b></i></p>
                <p style={{marginLeft:"20rem"}}>MY ORDERS</p>  
                <p>CART</p>
                <p>CONTACT</p>
                <p>USD</p>
                <p>ENG</p>  
            </div>

            <div className="header2">
                <div className="img-container"><img className="img" src={logo} /></div>
                <div className="item" style={{marginLeft:"2rem"}}>HOME</div>
                <div className="item">SHOP</div>
                <div className="item">PRODUCTS</div>
                <div className="item">BLOG</div>
                <div className="item">PAGES</div>
                <div className="item">ABOUT US</div>
                <div className="item">BUY PORTO!</div>
                <div className="icon" style={{marginLeft:"10rem"}}><SearchOutlined /></div>
                <div className="icon"><UserOutlined /></div>
                <div className="icon"><HeartOutlined /></div>
                <div className="icon"><ShoppingOutlined /></div>
            </div>
        </>
    )
}
export default Header;