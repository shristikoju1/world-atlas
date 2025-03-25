import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="country-card card  bg-blue-box container-card">
      <img src={flags.svg} alt={flags.alt} />
      <div className="countryInfo">
        <p className="card-title">
          {name.common.length > 15
            ? name.common.slice(0, 15) + "..."
            : name.common}
        </p>

        <p>
          <span className="card-description">Popolation:</span>
          {population.toLocaleString()}
        </p>
        <p>
          <span className="card-description">Region:</span>
          {region}
        </p>
        <p>
          <span className="card-description">Capital:</span>
          {capital[0]}
        </p>
        <NavLink to={`/country/${name.common}`}>
          <button>Read More</button>
        </NavLink>
      </div>
    </li>
  );
};

export default CountryCard;
