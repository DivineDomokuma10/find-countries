import Home from "./Components/Home";
import contents from "./assets/context";
import NavBar from "./Components/NavBar";
import Country from "./Components/Country";
import { Routes, Route } from "react-router-dom";
import StillFetching from "./Components/StillFetching";
import { useState, useEffect, useReducer } from "react";

function App() {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [allCountries, setAllCountries] = useState({});
  const [url, setUrl] = useState(`https://restcountries.com/v3.1/all`);
  const [countries, setCountries] = useState([]);
  const [hasFetch, setHasFetch] = useState(false);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setAllCountries(data);
      })
      .catch((err) => {
        console.error("ERROR: " + err);
      });
  }, []);

  useEffect(() => {
    console.log(url);
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setCountries(data);
        setHasFetch(false);
        setTimeout(() => setHasFetch(true), 2000);
      })
      .catch((err) => {
        setHasFetch(false);
        console.error("ERROR: " + err);
      });
  }, [url]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const mode = () => setTheme(theme === "light" ? "dark" : "light");

  const filterByRegion = (region) => setUrl(() => region);
  const upDateSelectedCountry = (selected) =>
    setSelectedCountry(() => selected);

  return (
    <contents.Provider
      value={{
        url,
        mode,
        theme,
        countries,
        setHasFetch,
        setCountries,
        allCountries,
        filterByRegion,
        selectedCountry,
        upDateSelectedCountry,
      }}
    >
      <div className="flex flex-col bg-white dark:bg-gray-">
        <NavBar />
        {hasFetch === false ? (
          <StillFetching />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country" element={<Country />} />
          </Routes>
        )}
      </div>
    </contents.Provider>
  );
}

export default App;
