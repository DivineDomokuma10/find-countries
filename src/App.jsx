import NavBar from './Components/NavBar'
import { Route,Routes } from 'react-router-dom'
import Country from './Components/Country'
import Home from './Components/Home'
import { useState, useLayoutEffect, useEffect } from 'react'




const App = () => {

  const [url, setUrl] = useState(`https://restcountries.com/v3.1/all`)
  const [currCountry, setCurrCountry] = useState({});
  const [countryData, setCountryData] = useState([]);
  const [theme, setTheme] = useState('Light')
  const [completeFetch,setFetch] = useState(true);
  
  useLayoutEffect(() => {
    const apiCall = async () =>{
      const req = await fetch(url);
      const resp = await req.json();
      setCountryData([...resp])

      if (req.status === 200) {
        setFetch(true)
      }
      else{
        setFetch(false)
      }
      console.log('useLayout has been called')
    }
    return apiCall
  }, [])

  
  

  const toggleTheme = () => theme === 'Light' ? setTheme('Dark') : setTheme('Light');

  const filterByRegion = regionUrl =>  setUrl(regionUrl)

  const setCountry = counrtyObj => setCurrCountry({...counrtyObj})


  return (
    <div className="flex flex-col">
      <NavBar theme={theme} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" 
          element={<Home 
            theme={theme} 
            countries={countryData} 
            setCountry={setCountry} 
            filterByRegion={filterByRegion} 
            fetched={completeFetch}
          />} 
        />
      <Route path="country" element={<Country theme={theme} country={currCountry}/>} />
      </Routes>
    </div>
  )
}

export default App
