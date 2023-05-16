import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import classses from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signinHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);

        if (response) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
  };

  const registerHandler = (e) => {
    e.preventDefault();
    if (email.trim().length === 0 && password.trim().length === 0) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        if (response) {
          navigate("/");
        }
        console.log(response);
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={classses.wrapper}>
      <div className={classses.login}>
        <Link to="/">
          <img
            className={classses.image}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="amazon logo"
          />
        </Link>

        <form>
          <div className={classses["form-wrapper"]}>
            <h1>Sign-in</h1>
            <div className={classses["control-group"]}>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={classses["control-group"]}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className={classses.button}
              onClick={signinHandler}
            >
              Sign In
            </button>

            <p className={classses.notice}>
              By signing-in you agree to Amazon's Conditions of Use & Sale.
              Please see our Privacy Notice, our Cookies Notice and our
              Internet-Based Notice.
            </p>

            <button
              type="submit"
              className={classses.create}
              onClick={registerHandler}
            >
              Create your Amazon Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
