import "./productShape.css";

const ProductShape = ({ id, name, price, img, onDelete, onUpdate }) => {
  return (
    <tr className="product-row">
      <td>{name}</td>
      <td>${price}</td>
      <td>
        <img className="table-img" src={img} style={{ width: "100px" }} alt={name} />
      </td>
      <td className="methods">
        <button className="btn-delete" onClick={() => onDelete(id)}>
          Delete
        </button>
        <button className="btn-update" onClick={() => onUpdate(id)}>
          Update
        </button>
      </td>
    </tr>
  );
};

export default ProductShape;
