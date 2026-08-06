import { useState } from "react";
import ButtonStyle from "../../components/ButtonStyle/ButtonStyle";
import "./contact.css";

const Contact = () => {

  const [name,setName] = useState("zeina");
  const [email,setEmail] = useState("jadeedzeina@gmail.com");
  const [message,setMessage] = useState(`hi from me`);

  const onSubmit = (event) =>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setMessage(event.target[2].value);


  }
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="description">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
      <div className="hero-content">
        <div className="firstSide-container">
          <div className="contact">
            <ButtonStyle
              img="images/white message.png"
              text="VIA SUPPORT CHAT"
            />
            <ButtonStyle img="images/white telephon.png" text="VIA CALL" />
            <div className="contact-d-content">
              <img src="images/black message.svg" alt="" />
              <p>VIA EMAIL FORM</p>
            </div>
          </div>
          <form onSubmit={onSubmit} className="inputForm" action="">
            <div className="inputElement">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="inputElement">
              <label htmlFor="email">E-Mail</label>
              <input type="email" name="email" />
            </div>
            <div className="inputElement">
              <label htmlFor="text">TEXT</label>
              <textarea name="text" rows="10" />
            </div>
            <ButtonStyle text="SUBMIT" className="forDisplay" />

            <div>{name+"----"+email+"----"+message}</div>
          </form>
        </div>

        <img src="images/main contact photo.svg" alt="" />
      </div>
    </div>
  );
};

export default Contact;
