import { useEffect, useState } from "react";
import ButtonStyle from "../../components/ButtonStyle/ButtonStyle";
import ProductShape from "../../components/ProductShape/ProductShape";
import useProducts from "../../hooks/useProducts"; // تأكدي من المسار الصحيح
import "./admin.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const {
    allProducts, addProduct, deleteProduct, handleUpdate,
    isEditing, setIsEditing, setCurrentId, currentId
  } = useProducts();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  useEffect(()=>{
    const auth = localStorage.getItem("isAuth");
    if(!auth){
    navigate("/login")
    }
  },[])
  const filteredProducts = allProducts.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  const handleAction = () => {
    if (!name || !price) return alert("Enter full data!");

    const productData = { name, price: Number(price), url };

    if (isEditing) {
      handleUpdate(currentId, productData);
    } else {
      addProduct(productData);
    }

    setName(""); setPrice(""); setUrl("");
  };

  const startEdit = (id) => {
    const product = allProducts.find((p) => p.id === id);
    setName(product.name);
    setPrice(product.price);
    setUrl(product.url);
    setCurrentId(id);
    setIsEditing(true);
  };

  const searchForItem = () => {

  }

  return (
    <div className="za-form-container">
      <div className="za-input-container">
        <label>name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="za-input-container">
        <label>price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="za-input-container">
        <label>img product</label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>

      <ButtonStyle
        text={isEditing ? "Update" : "Submit"}
        className="forDiffStyle"
        onClick={handleAction}
      />

      <div className="za-input-container">
        <label htmlFor="search">search</label>
        <input id="search" placeholder="Type name to search" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* <div className="allSearchContainer">
        <div className="za-input-container">
          <label htmlFor="search">search</label>
          <input id="search" placeholder="Type name to search" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <ButtonStyle className="forSpaceStyle" img="/public/images/icons8-search-24.png" text="search"/>
      </div> */}

      <div className="za-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>product img</th>
              <th className="fixingThePosition">methods</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <ProductShape
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                img={product.url}
                onDelete={() => deleteProduct(product.id)}
                onUpdate={() => startEdit(product.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;