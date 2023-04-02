import React,{useContext} from 'react'
import contents from '../assets/context'

const Country = () => {
  
  const {selectedCountry} = useContext(contents)
  console.log(selectedCountry);
  console.log(selectedCountry);
  return (
    <div>
      {JSON.stringify(selectedCountry)}
    </div>
  )
}

export default Country