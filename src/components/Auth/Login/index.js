import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import retink from "../../../image/retink.svg";
import { auth } from "../Firebase";
import "./index.css";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formValues, setFormValues] = useState(initialState);

  const { email, password } = formValues;

  const handleChange = (e) => {
    setFormValues(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <img src={retink} className="retink" alt="retink" />
      <main className="login-page">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="login-input">
            <label>Email</label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
            />
          </div>

          <div className="login-input">
            <label>Password</label>
            <input
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              type="password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="login-links">
            <a href="/">Forgot Password ?</a>
            <a href="/signup">Don't have an account? Sign Up</a>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
