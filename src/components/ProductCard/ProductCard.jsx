
const ProductCard = ({ img, name, price }) => {
    return (
        <div className="productContainer">
            <div className="product-image">
                <img src={img} alt={name} />
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p className="product-price">{price} $</p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard
