import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import retink from "../../../image/retink.svg";
import { auth } from "../../../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./index.css";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formValues, setFormValues] = useState(initialState);
  const [loginError, setLoginError] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { email, password } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((values) => ({
      ...values,
      [name]: value,
    }));

    if (value !== "") {
      setLoginError((prev) => {
        return { ...prev, [name]: null };
      });
    } else {
      setLoginError((prev) => {
        return { ...prev, [name]: "This field is required" };
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email) {
      setLoginError((prev) => {
        return { ...prev, email: "Email is required" };
      });
      return;
    }
    if (!password) {
      setLoginError((prev) => {
        return { ...prev, password: "Password is required" };
      });
      return;
    }
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      toast.success(`Welcome back ${user.user.email}`);
      const toaster = () => {
        navigate("/");
      };
      setTimeout(toaster, 2000);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);

      setLoading(false);
    }
  };
  return (
    <div>
      <a href="/">
        <img src={retink} className="retink" alt="retink" />
      </a>
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
            <span>{loginError ? loginError.email : null}</span>
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
            <span>{loginError ? loginError.password : null}</span>
          </div>
          {loading ? (
            <button type="submit" className="login-button ">
              <div className="loader"></div>
            </button>
          ) : (
            <button type="submit" className="login-button">
              Login
            </button>
          )}
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
