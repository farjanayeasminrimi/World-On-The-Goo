import React, { useState } from "react";
import "./Country.css";

const Country = (country) => {
  const [visited, setVisited] = useState(false);
  const visitedHandler = () => {
    setVisited(visited ? false : true);
  };
  return (
    <div className={`Country ${visited && "visited"}`}>
      <img src={country.country.flags.flags.png} alt={country.country.flags.flags.alt} />
      <h2>Name: {country.country.name.common}</h2>
      <p>Population: {country.country.population.population}</p>
      <p>Region: {country.country.region.region}</p>
      <p>Area: {country.country.area.area}</p>
      <p>{country.country.area.area > 3000000 ? "Big Country" : "Small Country"}</p>
      <button className="btn" onClick={visitedHandler}>
        {visited === false ? "Not Visited" : "Visited"}
      </button>
    </div>
  );
};

export default Country;
