import "./Login.css"
import {useNavigate} from "react-router-dom"
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState("");
  const [email,setEmail] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(-1);
    localStorage.setItem("user", JSON.stringify(user));
    setUser("");
    setEmail("");
  };
  return (
    <div className="loginWrapper">
      <div className="loginWord">
        <h2>Login to see the details of recipe!</h2>
      </div>
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={user} onChange={(e)=>setUser(e.target.value)}/>
          </div>
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>

        <button type="submit">Login</button>
      </form>
      </div>      
    </div>
  )
}

export default Login