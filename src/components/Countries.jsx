import React, { use, useState } from "react";
import Country from "./Country/Country";
import "../components/Country/Country.css";

const Countries = ({ CountriesDataRes }) => {
  const CountriesData = use(CountriesDataRes);
  const countries = CountriesData.countries;
  const [visitedCountries, setVisitedCountries] = useState([]);
  const countriesName = (country) => {
    const newArr = [...visitedCountries, country];
    setVisitedCountries(newArr);
  };
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <h2>Visited: {visitedCountries.length}</h2>
      <div className="Countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            countriesName={countriesName}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
