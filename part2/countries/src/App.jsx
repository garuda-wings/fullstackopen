import { useState, useEffect } from 'react'
import countryService from './services/countries.js'
import CountryList from './components/CountryList.jsx'
import SingleCountry from './components/CountryDetails.jsx'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
      .catch(error => {
        console.error('Errror fetching countries:', error)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setSelectedCountry(null)
  }


  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )


  return (
    <>
      <h1 className="card-title">Countries</h1>
      <label> find countries </label>
      <input
        id="country-filter"
        value={filter}
        onChange={handleFilterChange}
      />

      {filter === '' ? null :
        selectedCountry ? (
          <SingleCountry country={selectedCountry} />
        ) :
        filteredCountries.length > 10 ? (
          <p className='card-notification'>Too many matches, specify another filter</p>
        ) : filteredCountries.length > 1 ?(
              <CountryList countries={filteredCountries} setSelectedCountry={setSelectedCountry}/>
        ) : filteredCountries.length === 1 ? (
          <SingleCountry country={filteredCountries[0]} />
        ) : (
          <p className='card-notification'>No countries found</p>
        )
      }
    </>
  )
}

export default App
