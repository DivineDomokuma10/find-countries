import React from "react";

const Card = ({countryDetail}) => {
  return (
    <div className="card text-sm rounded bg-white shadow-shadowLight dark:shadow-shadowDark dark:bg-gray-700 dark:text-white">
      <img src={countryDetail.flags.png} className="w-72 h-56 rounded-t md:w-full"/>
      <div className="pt-5 pb-3 px-4 space-y-3">
        <h2 className="text-lg font-bold">{countryDetail?.name?.common}</h2>
        <div className="space-y-1">
          <p>
            <span>Population:</span> {countryDetail?.population}
          </p>
          <p>
            <span>Region:</span> {countryDetail.region}
          </p>
          <p>
            {/* <span>Capital:</span> {countryDetail?.capital[0]} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
