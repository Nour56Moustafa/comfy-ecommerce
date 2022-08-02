import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <h5>
          &copy; {new Date().getFullYear()}
          <span>Comfy Sloth</span>
          All Right Reversed
        </h5>
      </div>
    </section>
  );
};

export default Footer;
