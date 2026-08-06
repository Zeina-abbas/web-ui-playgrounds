import "./home.css";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard/ProductCard.jsx"

function Home() {
    const { allProducts } = useProducts();
    return (
        <div className="homeContainer">
            <section className="heroContainer">
                <div className="heroContent">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="btns">
                        <button className="shopBtn">Shop Now</button>
                        <button className="categoryBtn">Category</button>
                    </div>
                    {/* <p className="littleDescription">Also Available On</p> */}
                    {/* <img src="../public/images/amazon.png" alt="" /> */}
                </div>
                <img className="shoesImg" src="../public/images/shoe_image.png" alt="" />
            </section>
            <section className="displayTheProductsSpace">
                {allProducts.map((product, index) => {
                    <ProductCard
                        key={index}
                        img={product.img}
                        name={product.name}
                        price={product.price}
                    />
                })}
            </section>
        </div>
    );
};

export default Home;
