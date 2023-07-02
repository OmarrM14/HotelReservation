import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
//import "./login.css";



export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const navigate = useNavigate()


  

  const handleSubmit = (e) => {
       console.log(fname,lname,email,password);
       
       const jsonData = {first_name:fname,
        last_name:lname,
        email:email,
        password:password
      }
       //const element = document.createElement("a");
       //const textFile = new Blob([JSON.stringify(jsonData)], {type: 'text/plain'}); //pass data from localStorage API to blob
       //element.href = URL.createObjectURL(textFile);
       //element.download = "./src/pages/Signup/data.json";
       //document.body.appendChild(element); 
       //element.click();
     alert("Sign Up Successful - Welcome "+fname+" "+lname+ " Enjoy your time with us"  );
     navigate("/2")
    
  };

  return (
  <div className="login">
      <div className="lContainer">
        <form onSubmit={handleSubmit}>
          <div className ="lInput">Sign Up</div>
          <div className="lInput">
            Register As
            <input 
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>
          {userType === "Admin" ? (
            <div className="lInput">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="lInput">
            <label>First name   </label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              id = "fn"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="lInput">
            <label>Last name   </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              id = "ln"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="lInput">
            <label>Email address   </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id = "email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="lInput">
            <label>Password   </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id = "password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="lButton ">
                 
             <button type="button" onClick={handleSubmit}> 
              Sign Up
            </button>
           
 
          </div>
          <p className="lInput">
            Already registered <a href="/login">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}