import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="error-page">
      <div className="container">
        <h1>404</h1>
        <p>sorry, the page you tried can't found </p>
        <Link className="btn btn-notfound" to="/">
          back home
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
