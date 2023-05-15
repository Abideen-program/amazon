import React from "react";
import { Link } from "react-router-dom";
import classses from "./Login.module.css";

const Login = () => {
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
              <input id="email" type="email" />
            </div>

            <div className={classses["control-group"]}>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" />
            </div>

            <button className={classses.button}>Sign In</button>

            <p className={classses.notice}>
              By signing-in you agree to Amazon's Conditions of Use & Sale.
              Please see our Privacy Notice, our Cookies Notice and our
              Internet-Based Notice.
            </p>

            <button className={classses.create}>
              Create your Amazon Account{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
