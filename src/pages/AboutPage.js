import React from "react";
import abutImg from "../assets/images/hero-bcg.jpeg";
import PageHero from "../component/PageHero";

const AboutPage = () => {
  return (
    <main className="about-page">
      <PageHero title="About" />
      <div className="container">
        <img src={abutImg} alt="nice desk" />
        <article>
          <h2>Our Story</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </div>
    </main>
  );
};

export default AboutPage;
