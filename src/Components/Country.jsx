import React, { useContext, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import contents from "../assets/context";

const Country = () => {
  const { selectedCountry } = useContext(contents);
  const nativeName = Object.keys(selectedCountry.name.nativeName)[Object.keys(selectedCountry.name.nativeName).length - 1];
  const currency = Object.keys(selectedCountry.currencies)[0]
  const language = Object.keys(selectedCountry.languages)
  const getAll = (arr,obj) =>{
    let result = []
    arr.forEach(e => result.push(` ${obj[e]}`));
    return result.toLocaleString()
  }
  useEffect(() => console.log(selectedCountry), []);
  return (
    <div className="w-full flex flex-col p-5 space-y-10 min-h-[89.95vh] bg-gray-100 relative top-[66px] md:top-[73.2px] dark:text-white dark:bg-gray-900">
      <Link
        to="/"
        className="flex items-center justify-center py-2 px-6 space-x-5 bg-white w-fit rounded-md cursor-pointer shadow-shadow-light dark:shadow-shadow-dark dark:text-white dark:bg-gray-700"
      >
        <FaArrowLeft />
        <span>Back</span>
      </Link>
      <div className="w-full flex flex-col space-y-10">
        <img src={selectedCountry?.flags.png} alt="" />
        <h2 className="text-2xl font-bold">{selectedCountry?.name?.common}</h2>
        <div className="space-y-2">
          <p className='text-base font-semibold'>Native Name: <span className='font-light'>{selectedCountry.name.nativeName[nativeName].common}</span></p>
          <p className='text-base font-semibold'>Population: <span className='font-light'>{selectedCountry.population}</span></p>
          <p className='text-base font-semibold'>Region: <span className='font-light'>{selectedCountry.region}</span></p>
          <p className='text-base font-semibold'>Sub Region: <span className='font-light'>{selectedCountry.subregion}</span></p>
          <p className='text-base font-semibold'>Capital: <span className='font-light'>{selectedCountry.capital[0]}</span></p>
        </div>
        <div className="space-y-2">
          <p className='text-base font-semibold'>Top Level Domain: <span className='font-light'>{selectedCountry.tld[0]}</span></p>
          <p className='text-base font-semibold'>Currencies: <span className='font-light'>{selectedCountry.currencies[currency].name}</span></p>
          <p className='text-base font-semibold'>Languages: <span className='font-light'>{getAll(language,selectedCountry.languages)}</span></p>
        </div>
        <button className="flex items-center justify-center py-2 px-6 space-x-5 bg-white w-full rounded-md cursor-pointer shadow-shadow-light dark:shadow-shadow-dark dark:text-white dark:bg-gray-700">See Country on Map</button>
      </div>
    </div>
  );
};

export default Country;
