import React, { useState } from "react";
import retink from "../../../image/retink.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./index.css";
import { auth } from "../Firebase";

const initialState = {
  email: "",
  password: "",
};

function SignUp() {
  const [formValues, setFormValues] = useState(initialState);

  const { email, password } = formValues;

  const handleChange = (e) => {
    setFormValues(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <img src={retink} className="retink" alt="retink" />
      <main className="signup-page">
        <h1>Login</h1>
        <form onSubmit={handleSignUp}>
          <div className="signup-input">
            <label>Email</label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
            />
          </div>

          <div className="signup-input">
            <label>Password</label>
            <input
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              type="password"
            />
          </div>

          <div className="signup-input">
            <label>Confirm Password</label>
            <input
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              type="password"
            />
          </div>
          <button type="submit" className="signup-button">
            Login
          </button>
          <div className="signup-links">
            <a href="/login">Already have an account? Login</a>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignUp;
