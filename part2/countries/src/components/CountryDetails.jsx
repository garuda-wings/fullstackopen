// Mostrar información detallada del país seleccionado
import { useState, useEffect } from 'react'
import getWeather from '../services/weather.js'

const SingleCountry = ({ country }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        getWeather(country.capital).then(weatherData => {
            setWeather(weatherData)
        }).catch(error => {
            console.error('error fetching weather data for', country.capital, ':', error)
        })
    }, [country.capital])



    return (
        <div>
            <h2 className="card-title">{country.name.common}</h2>
            <p className='card-text'>Capital: {country.capital}</p>
            <p className='card-text'>Area {country.area}</p>

            <h3 className='card-section'>Languages</h3>
            {
                <ul>
                    {Object.values(country.languages).map((language) => (
                        <li 
                            className='card-text' 
                            key={language}
                        >{language}</li>
                    )
                    )}
                </ul>


            }
            <div>
                <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                />
            </div>
            <h3 className='card-section'>Weather in {country.capital}</h3>

            {weather && (
                <>
                    <p className='card-text'>
                        Temperature {weather.main.temp} °C
                    </p>

                    <img
                        src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
                        alt={weather.weather[0].description}
                    />

                    <p className='card-text'>
                        Wind {weather.wind.speed} m/s
                    </p>
                </>
            )}
        </div>
    )
}

export default SingleCountry