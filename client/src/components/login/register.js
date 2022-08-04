import React from "react";
import "../css/register.css"
const Register = () => {
  return (
    <div className="container1">
      <form>
        <div className="registercontainer">
          <div className="input">
            <input type="text" className="int" placeholder="username" name="username"/>
            <br/>
            <input type="text" className="int" placeholder="email" name="email"/><br/>
            <input type="password" className="int" placeholder="placeholder" name="password"/><br/>
            <h3>Gender</h3>
            <label>male</label>
            <input type="radio"  className="radio" name="gernder" value="male"/>
            <label>Female</label> <input type="radio" className="radio" name="gernder" value="male"/>

          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
