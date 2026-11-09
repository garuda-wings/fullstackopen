import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const getWeather = (city) => {
    const request = axios.get(`${baseUrl}?q=${city}&units=metric&appid=${import.meta.env.VITE_API_WEATHER_KEY}`)
    return request.then(response => response.data)
}

export default getWeather