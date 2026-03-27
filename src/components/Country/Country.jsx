import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, countriesName }) => {
  const [visited, setVisited] = useState(false);
  const visitedHandler = () => {
    setVisited(visited ? false : true);
    countriesName(country);
  };
  return (
    <div className={`Country ${visited && "visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <p>Population: {country.population.population}</p>
      <p>Region: {country.region.region}</p>
      <p>Area: {country.area.area}</p>
      <p>{country.area.area > 3000000 ? "Big Country" : "Small Country"}</p>
      <button className="btn" onClick={visitedHandler}>
        {visited === false ? "Not Visited" : "Visited"}
      </button>
    </div>
  );
};

export default Country;
