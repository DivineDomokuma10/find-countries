import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { ImArrowDown2,ImArrowUp2 } from 'react-icons/im';
import CountryCard from './CountryCard';
import StillFetching from './StillFetching';



const Home = ({theme,countries,filterByRegion,setCountry,fetched}) => {
  const [dropDow, setDropDown] = useState(false);
  const [Regions, setRegions] = useState([
    {id:1, region: 'Africa', api:'https://restcountries.com/v3.1/region/africa'},
    {id:2, region: 'America', api:'https://restcountries.com/v3.1/region/america'},
    {id:3, region: 'Asia', api:'https://restcountries.com/v3.1/region/asia'},
    {id:4, region: 'Europe', api:'https://restcountries.com/v3.1/region/europe'},
    {id:5, region: 'Oceania', api:'https://restcountries.com/v3.1/region/oceania'}
  ])
  const toggleDropDown = () => dropDow ? setDropDown(!(dropDow)) : setDropDown(!(dropDow))
  
  return (  
    <div className={theme === 'Light' ? 'con-light': 'con-dark'}>
      <div className='w-[330px] fixed flex flex-col space-y-10 md:w-[90%] md:flex-row md:space-y-0 md:justify-between'>
        <span className={theme === 'Light' ? 'input-span-light': 'input-span-dark'}>
          <FaSearch className='text-lg text-gray-300'/>
          <input type="text" placeholder='Search for country...' 
            className={theme === 'Light' ? 'input-light': 'input-dark'}
          />
        </span>
        <span className={`w-fit ${theme === 'Light' ? 'bg-white shadow-md' : 'bg-[#494848] shadow-md shadow-[#b9dadf68]'} flex items-center px-4 py-4 space-x-10 rounded-lg cursor-pointer`}
        onClick={() => toggleDropDown()}
        >
          <p className='text-sm'>Filter by Region</p>
          {dropDow ? <ImArrowUp2 className='text-xs'/> : <ImArrowDown2 className='text-xs'/>}
        </span>
        {dropDow && <span className={`w-fit ${theme === 'Light' ? 'bg-white shadow-md' : 'bg-[#494848] '} rounded-lg py-2 px-2 absolute top-28 md:top-16 md:right-0`}>
          {Regions.map(Region => (
            <p key={Region.id} onClick={() => filterByRegion(Region.api)} className={`w-[162px] flex py-2 px-2 ${theme === 'Light' ? 'hover:bg-gray-100' : 'hover:bg-gray-400'} rounded-md cursor-pointer hover:font-semibold`}>{Region.region}</p>
          ))}
        </span>}
      </div>
      <div className={`w-full flex flex-col items-center space-y-10 mt-48 p-5 
        md:grid md:grid-flow-row md:grid-cols-4 md:space-y-0 md:mt-32 md:grid-rows-3`}>
          {fetched === false ? <StillFetching/> : countries.slice(0,12).map((country,index) => (
            <CountryCard key={index} theme={theme} country={country} setCountry={setCountry}/>
          ))}
      </div>

    </div>
  )
}

        
export default Home