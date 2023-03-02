import React from 'react'
import flag from '../assets/belgium.jpg'

const CountryCard = ({theme,country}) => {
  return (
    <div className={`w-fit ${theme === 'Light' ? 'bg-white' : 'bg-[#494848]'} rounded-md shadow-md cursor-pointer  md:m-5`}>
        <img src={country.flags.png} alt="" className='rounded-tl-md rounded-tr-md md:w-[300px] md:h-[200px]'/>
        <div className={`p-5 space-y-5`}>
            <h2 className='text-xl font-bold'>{country.name.common}</h2>
            <div className='text-base space-y-1'>
                <p><span className='font-semibold'>Population:</span> {country.population}</p>
                <p><span className='font-semibold'>Region:</span> {country.region}</p>
                <p><span className='font-semibold'>Captial:</span> {country.capital[0]}</p>
            </div>
        </div>
    </div>
  )
}

export default CountryCard