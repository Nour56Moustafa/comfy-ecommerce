import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const SignupPage = () => {
  const {
    handleInputChange,
    handleSingnupSubmit,
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
        <h1>Sign Up</h1>
        <form onSubmit={handleSingnupSubmit}>
          <h5>E-mail</h5>
          <input type="email" name="email" onChange={handleInputChange} />
          <h5>Password</h5>
          <input type="password" name="password" onChange={handleInputChange} />
          <h5>Confirm Password</h5>
          <input
            type="password"
            name="confirm_password"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="login__signInButton"
            disabled={loading}
          >
            {loading ? "Loading .." : "Sing Up"}
          </button>
          {error && <p className="form__error">{error_message}</p>}
        </form>
        <p className="login__footer">
          already a user ? <Link to="/login">log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
