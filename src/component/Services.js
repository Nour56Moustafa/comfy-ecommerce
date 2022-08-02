import React from "react";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <article className="sevrvices-header">
          <h2>
            custom furniturebr <br />
            built only for You
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </article>
        <div className="services-body">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service-card">
                <span>{icon}</span>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
