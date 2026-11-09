// Mostrar la lista de países coincidentes

const CountryList = ({ countries, setSelectedCountry }) => (
  <ul>
    {countries.map(country => (
      <li key={country.cca3}>
        {country.name.common} <button onClick={() => setSelectedCountry(country)}>Show</button>
      </li>
    ))}
  </ul>
)

export default CountryList