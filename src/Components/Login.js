import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [pic, setPic] = useState();
  const [userName, setUserName] = useState();

  return (
    <div>
      <h1>Log In</h1>
      <div className="inputs">
        <h3>Enter User Name: </h3>
        <input onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className="inputs">
        <h3>Enter Profile Pic URL: </h3>
        <input onChange={(e) => setPic(e.target.value)} />
      </div>
      <button onClick={() => setUser({ userName, pic })}>Submit</button>
    </div>
  );
};

export default Login;
