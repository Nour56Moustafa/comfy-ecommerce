import React from "react";
import { Link } from "react-router-dom";
import heroBcg from "../assets/images/hero-bcg.jpeg";
import heroBcg2 from "../assets/images/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <article className="content">
          <h1>
            Design Your
            <br />
            Comfort Zone
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link to="/products" className="btn btn-hero">
            shop now
          </Link>
        </article>
        <article className="imgs-holder">
          <img src={heroBcg} alt="nice table" className="main-img" />
          <img src={heroBcg2} alt="person working" className="accent-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
