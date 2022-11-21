import React, { useEffect, useState } from 'react';
import style from "../styles/product1.css"
import axios from 'axios';
import Category from './category';

const Products = () => {

    let [productsData, setProductsData] = useState("");

    const fetchData = async () => {
        try {

            const data = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668790104/React%20Class/Swathi%20Swaroopa/featured_jq4dyr.json")
            console.log(data);
            setProductsData(data.data.slice(0,3))
        } catch (error) {
            console.log(error);
        }



    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(productsData)



    return (
<div className='main'>
        

            {productsData && productsData.map(e => (
                <div >


                    <div className='imgContainer'>
                        <img src={e.pictures[0].url} className="image" />

                        <p style={{fontFamily:"sans-serif",fontSize:"13px",color:"grey"}}>{e.categories[0].name}</p>

                        <p style={{fontFamily:"sans-serif"}} className={style.name}>{e.name}</p>
        
                        <p><b style={{fontSize:"25px",fontFamily:"sans-serif"}}>${e.price[0]}</b></p>
                        {/* <p className={style.name}><strike>${e.price[1]}</strike> ${e.price[0]}</p> */}
                    
    
                    {/* <div>
                        <img src={e.pictures[1].url} className={style.image} />


                        <p className={style.name}>{e.name}</p>
                        <p className={style.name}><strike>${e.price[1]}</strike> ${e.price[0]}</p>
                    </div>
                    <div>
                        <img src={e.pictures[2].url} className={style.image} />


                        <p className={style.name}>{e.name}</p>
                        <p className={style.name}><strike>${e.price[1]}</strike> ${e.price[0]}</p>
                    </div> */}
                </div>
                </div>

            ))}



        </div>
     

    )




}



export default Products;