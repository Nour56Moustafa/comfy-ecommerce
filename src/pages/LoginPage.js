import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const LoginPage = () => {
  const {
    handleInputChange,
    handleLoginSubmit,
    error,
    error_message,
    loading,
  } = useUserContext();

  return (
    <div className="login">
      <a href="/">
        <img className="login__logo" src={logo} alt="logo" />
      </a>
      <div className="login__container">
        <h1>Log in</h1>
        <form onSubmit={handleLoginSubmit}>
          <h5>E-mail</h5>
          <input type="email" name="email" onChange={handleInputChange} />
          <h5>Password</h5>
          <input type="password" name="password" onChange={handleInputChange} />
          <button
            type="submit"
            className="login__signInButton"
            disabled={loading}
          >
            {loading ? "Loading .." : "Log In"}
          </button>
          {error && <p className="form__error">{error_message}</p>}
        </form>
        <p className="login__footer">
          not a user ? <Link to="/sign-up">sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
