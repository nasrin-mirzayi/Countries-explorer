import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Filter from "./components/RegionFilter";
import SuggestionButtons from "./components/CountryList";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");

  // Fetch function outside useEffect so Retry button can call it
  const getCountries = async () => {
    try {
      setLoading(true);
      setError(null);

      let url = "https://restcountries.com/v3.1/all";

      if (search.length >= 2) {
        url = `https://restcountries.com/v3.1/name/${search}`;
      } else if (region !== "all") {
        url = `https://restcountries.com/v3.1/region/${region}`;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();
      setCountries(data);
    } catch (err) {
      setCountries([]);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, [search, region]);

  return (

    <div className="card">

    
      <h1>Countries Explorer</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <Filter region={region} setRegion={setRegion} />
      <SuggestionButtons setSearch={setSearch} />

      {loading && <p>Loading countries...</p>}

      {error && (
        <div>
          <p>Error: {error}</p>
          <button onClick={getCountries}>Retry</button>
        </div>
      )}

        <div className="list">
        {countries.map((country) => (
          <div key={country.cca3}>
            <img src={country.flags?.png} width="100" alt="flag" />
            <h3>{country.name?.common}</h3>
            <p>Region: {country.region}</p>
            <p>Population: {country.population?.toLocaleString()}</p>
          </div>

        ))} </div>
      </div>
    
  );
}

export default App;
