import "./ButtonStyle.css";

const ButtonStyle = ({ img, text, className,onClick }) => {

  return (
    <div className="btn-container">
      <button onClick={onClick} className="btn-content forDisplay forDiffStyle forSpaceStyle">
        <img src={img} alt="" />
        <p>{text}</p>
      </button>
    </div>
  );
};

export default ButtonStyle;
