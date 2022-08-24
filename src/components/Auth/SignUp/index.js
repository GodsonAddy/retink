import React, { useState } from "react";
import retink from "../../../image/retink.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./index.css";
import { auth } from "../../../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function SignUp() {
  const [formValues, setFormValues] = useState(initialState);
  const [signUpError, setSignUpError] = useState({});
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
      setSignUpError((prev) => {
        return { ...prev, [name]: null };
      });
    } else {
      setSignUpError((prev) => {
        return { ...prev, [name]: "This field is required" };
      });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!email) {
      setSignUpError((prev) => {
        return { ...prev, email: "Email is required" };
      });
      return;
    }
    if (!password) {
      setSignUpError((prev) => {
        return { ...prev, password: "Password is required" };
      });
      return;
    }
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      toast.success(`You're sign up as ${user.user.email}`);
      const toaster = () => {
        navigate("/");
      };
      setTimeout(toaster, 2000);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <a href="/">
        <img src={retink} className="retink" alt="retink" />
      </a>

      <main className="signup-page">
        <h1>Sign Up</h1>
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
            <span>{signUpError ? signUpError.email : null}</span>
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
            <span>{signUpError ? signUpError.password : null}</span>
          </div>

          {loading ? (
            <button type="submit" className="login-button ">
              <div className="loader"></div>
            </button>
          ) : (
            <button type="submit" className="login-button">
              Sign up
            </button>
          )}
          <div className="signup-links">
            <a href="/login">Already have an account? Login</a>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignUp;
