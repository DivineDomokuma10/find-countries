import Card from "./Card";
import contents from "../assets/context";
import React, { useState, useReducer, useContext } from "react";
import { FaSearch, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "showDrop":
      return { drop: !state.drop, region: state.region };
    case "activeRegionText":
      return { drop: state.drop, region: action.value };
    default:
      return state;
  }
};

const Home = () => {
  const [enableSearch, setEnableSearch] = useState(false);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const { countries, allCountries, filterByRegion, upDateSelectedCountry } =
    useContext(contents);
  const [state, dispatch] = useReducer(reducer, {
    drop: false,
    region: "Filter by Region",
  });

  const regions = [
    {
      id: 1,
      text: "Africa",
      apiLink: "https://restcountries.com/v3.1/region/africa",
    },
    {
      id: 2,
      text: "America",
      apiLink: "https://restcountries.com/v3.1/region/america",
    },
    {
      id: 3,
      text: "Asia",
      apiLink: "https://restcountries.com/v3.1/region/asia",
    },
    {
      id: 4,
      text: "Europe",
      apiLink: "https://restcountries.com/v3.1/region/europe",
    },
    {
      id: 5,
      text: "Oceania",
      apiLink: "https://restcountries.com/v3.1/region/oceania",
    },
  ];

  const handlSearch = (e) => setSearchKeyWord(e.target.value);

  return (
    <div className="w-full h- flex mt-[66px] bg-gray-50 overflow-auto flex-col justify-center dark:bg-gray-800">
      <div className="w-full white top-[66px] flex flex-col items-start py-5 px-4 space-y-5 bg-gray-50 md:space-y-0 justify-between md:flex-row dark:bg-gray-800  fixed">
        <div className="w-80 p-3 flex  items-center shadow-shadow-light bg-white rounded-md space-x-3 dark:bg-transparent dark:shadow-shadow-dark ">
          <FaSearch className="text-gray-400 dark:text-white" />
          <input
            type="search"
            placeholder="Search countries by name"
            onChange={handlSearch}
            onFocus={() => setEnableSearch(true)}
            // onBlur={() => setEnableSearch(false)}
            className="w-[100%] h-full text-sm placeholder:text-sm outline-none px-3 bg-transparent dark:text-white"
          />
        </div>
        <div className="w-fit h-fit">
          <div
            className="w-48
             text-sm dark:text-white flex items-center p-3 justify-between bg-white shadow-shadowLight rounded-md cursor-pointer dark:bg-transparent dark:shadow-shadowDark"
            onClick={() => dispatch({ type: "showDrop" })}
          >
            <p>{state.region}</p>
            {state.drop === false ? <FaArrowDown /> : <FaArrowUp />}
          </div>
          {state.drop && (
            <div className="w-48 bg-white text-sm mt-1 shadow-shadowLight rounded-md p-3 dark:bg-transparent dark:shadow-shadowDark">
              {regions.map((region) => (
                <p
                  onClick={() => {
                    filterByRegion(region.apiLink);
                    dispatch({ type: "activeRegionText", value: region.text });
                  }}
                  key={region.id}
                  className="p-2 hover:bg-gray-100 hover:font-semibold cursor-pointer rounded dark:hover:bg-gray-500 dark:text-white"
                >
                  {region.text}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col mt-36 space-y-10 items-center justify-center p-5 md:grid md:grid-cols-4 md:gap-7 md:space-y-0 md:p-10">
        {enableSearch === true
          ? allCountries
              .filter((c) =>
                c?.name?.common.toLowerCase().includes(searchKeyWord.toLowerCase())
              )
              .slice(0, 20)
              .map((country, i) => (
                <Link
                  key={i}
                  to="/country"
                  onClick={() => upDateSelectedCountry(country)}
                >
                  <Card countryDetail={country} />
                </Link>
              ))
          : countries.slice(0, 20).map((country, i) => (
              <Link
                key={i}
                to="/country"
                onClick={() => upDateSelectedCountry(country)}
              >
                <Card countryDetail={country} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Home;
