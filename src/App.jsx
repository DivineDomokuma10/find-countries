import NavBar from './Components/NavBar'
import { Route,Routes } from 'react-router-dom'
import Country from './Components/Country'
import Home from './Components/Home'
import { useState, useLayoutEffect } from 'react'




const App = () => {

  const [url, setUrl] = useState(`https://restcountries.com/v3.1/all`)
  const [currCountry, setCurrCountry] = useState('');
  const [countryData, setCountryData] = useState([]);
  const [theme, setTheme] = useState('Light')
  
  useLayoutEffect(() => {
    const apiCall = async () =>{
      const req = await fetch(url);
      const resp = await req.json();
      setCountryData([...resp]);
      console.log(resp);
    }
    return apiCall
  }, [url])

  const toggleTheme = () => theme === 'Light' ? setTheme('Dark') : setTheme('Light') 


  return (
    <div className="flex flex-col">
      <NavBar theme={theme} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" 
          element={<Home theme={theme} countries={countryData}/>}
        />
        <Route path="country" element={<Country/>} />
      </Routes>
    </div>
  )
}

export default App
