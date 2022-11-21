import "../styles/category.css";
import img1 from "../media/cat-1.jpg";
import img2 from "../media/cat-2.jpg";
import img3 from "../media/cat-3.jpg";
import img4 from "../media/cat-4.jpg";
import img5 from "../media/cat-5.jpg";

const Category = () => {
    return(
        <>
            <p className="heading">Shop By Category</p>
            <p className="para">Only the best seller products added recently in our catalog</p>

            <hr></hr>

            <div className="main">
                <div className="container1">
                    <div><img className="img1" src={img1} /></div>
                    <div><img style={{marginTop:"1rem"}} className="img2" src={img4} /></div>
                </div>
                <div><img className="img3" src={img2} /></div>
                <div className="container2">
                    <div><img className="img2" src={img3} /></div>
                    <div><img style={{marginTop:"1rem"}} className="img1" src={img5} /></div>
                </div>
            </div>
        </>
    )
}
export default Category;