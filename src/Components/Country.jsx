import React from 'react'
import { FaArrowLeft, FaMapMarked } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Country = ({theme,country}) => {
  const nativeName = Object.keys(country.name.nativeName)[Object.keys(country.name.nativeName).length - 1];
  const currency = Object.keys(country.currencies)[0]
  const language = Object.keys(country.languages)
  // console.log(nativeName);

  const getAll = (arr,obj) =>{
    let result = []
    arr.forEach(e => result.push(` ${obj[e]}`));
    return result.toLocaleString()
  }
  return (
    <div className={`${theme === 'Light' ? 'con-light': 'con-dark'} md:h-[100vh] md:flex-row md:py-0 md:mt-0`}>
      <div className='mt-6 flex flex-col space-y-20 md:mt-0'>
        <Link to='/' className={`w-fit flex items-center ${theme === 'Light' ? 'bg-white shadow-md' : 'bg-[#494848] shadow-md shadow-[#b9dadf68]'}
         bg-white px-10 py-2 rounded-md cursor-pointer space-x-2 shadow-md fixed`}>
          <FaArrowLeft/>
          <p>Back</p> 
        </Link>
        <img src={country.flags.png} alt="" className='min-w-[350px] md:w-[600px] '/>
      </div>
      <div className='w-full mt-20 px-6 flex flex-col space-y-8 md:mt-0 md:ml-14'>
        <div className='flex flex-col space-y-10 md:flex-row md:space-y-0 space-x-16 md:items-center'>
          <span className='space-y-2'>
            <div className='text-2xl font-extrabold mb-10'>{country.name.common}</div>
            <p className='text-sm font-semibold'>Native Name: <span className='font-light'>{country.name.nativeName[nativeName].common}</span></p>
            <p className='text-sm font-semibold'>Population: <span className='font-light'>{country.population}</span></p>
            <p className='text-sm font-semibold'>Region: <span className='font-light'>{country.region}</span></p>
            <p className='text-sm font-semibold'>Sub Region: <span className='font-light'>{country.subregion}</span></p>
            <p className='text-sm font-semibold'>Capital: <span className='font-light'>{country.capital[0]}</span></p>
          </span>
          <div className='space-y-2'>
            <p className='text-sm font-semibold'>Top Level Domain: <span className='font-light'>{country.tld[0]}</span></p>
            <p className='text-sm font-semibold'>Currencies: <span className='font-light'>{country.currencies[currency].name}</span></p>
            <p className='text-sm font-semibold'>Languages: <span className='font-light'>{getAll(language,country.languages)}</span></p>
          </div>
        </div>
        <span className={`bg-white p-3 ${theme === 'Light' ? 'bg-white shadow-md' : 'bg-[#494848] shadow-md shadow-[#b9dadf68]'} justify-center flex items-center space-x-2 shadow-md rounded-md cursor-pointer`}>
          <p className='text-lg font-semibold'>See Country On Map</p>
          <FaMapMarked className='text-xl'/>
        </span>
      </div>
    </div>
  )
}

export default Country