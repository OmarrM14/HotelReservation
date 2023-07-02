
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
   // dispatch({ type: "LOGIN_START" });
    try {
      //const res = await axios.post("/auth/login", credentials);
      //dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      //if(username ==="Nader")
      if(email === "test@test.com")
    {
      if(password === "123456")
      {
        alert(" Welcome ");
        navigate("/2")
      }
    } else if(email === "omarmust@must.com"){
      alert(" Welcome ");
      navigate("/2")
    }
    else if(email !== null ){
      alert(" Welcome ");
      navigate("/2")
    }
    else{
      alert("Email or password is incorrect");
    }
    } catch (err) {
      
     // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="Email"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">
          Login
        </button>
        
      </div>
    </div>
  );
};

export default Login;
