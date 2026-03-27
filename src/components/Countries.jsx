import React, { use } from "react";
import Country from "./Country/Country";
import "../components/Country/Country.css";

const Countries = ({ CountriesDataRes }) => {
  const CountriesData = use(CountriesDataRes);
  const countries = CountriesData.countries;
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <h2>Visited: {countries.length}</h2>
      <div className="Countries">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
