import React from "react";

const Concat = () => {
  return (
    <section className="concat">
      <div className="container">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="concat-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form>
            <input type="email" placeholder="Enter Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Concat;
