import { useState } from "react";
import ButtonStyle from "../../components/ButtonStyle/ButtonStyle";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (name === "zeina abbas" && email === "jadeedzeina@gmail.com" && password === "12345") {
      localStorage.setItem("isAuth", "true");
      navigate("/admin")
    }
  }
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="">Enter Name :</label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} required />
      </div>
      <div>
        <label htmlFor="" >Enter Email :</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
      </div>
      <div>
        <label htmlFor="">Enter password :</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <ButtonStyle text="SUBMIT" />
    </form>
  );
};

export default Login;
