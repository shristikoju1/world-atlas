import React from "react";
import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're pround of
      </h2>

      <div className="gradient-cards">
        {countryFacts.map((country) => {
          const {id, country_name, capital, population, interesting_fact} = country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{country_name}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Popolation:</span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact:</span>
                  {interesting_fact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
