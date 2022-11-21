import img1 from "../media/slide-1.jpg";
import img2 from "../media/slide-2.jpg";
import font from "../media/summer.png";
import {Carousel} from "antd";
import "../styles/carosel.css"


const Slide = () => {
    return (
        <>
            <Carousel>
                <div className="item1">
                    <img className="b-img1" src={img1} />
                    <div className="content1">
                        <h4 className="p1">New Amazing Collection</h4>
                        <p className="p2">Summer Beauty Sale</p>
                        <p className="p3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullam<br></br>corper quam lacus, et suscipit lectus porta efficitur.</p>
                        <div style={{display:"flex",alignItems:"center"}}>
                        <h4 className="p4">STARTING AT <b style={{color:"red",fontSize:"35px"}}>$39</b></h4>
                        <button style={{marginLeft:"2rem"}} className="btn">SHOP NOW</button></div>
                        
                    </div>
                    <img style={{position:"absolute",top:"60%",width:"700px",marginLeft:"9rem"}} src={font} />
                </div>
                <div className="item2">
                    <img className="b-img2" src={img2} />
                    <div className="content2"></div>
                </div>

            </Carousel>
        </>
    )
}
export default Slide;