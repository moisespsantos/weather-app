import axios from 'axios';


const getTodos = async () => {
       return await axios.get('https://jsonplaceholder.typicode.com/todos')
}

  const { REACT_APP_API_WEATHER_ACCESS_KEY } = process.env;

const getWeatherInfo = async (q) => {
       return await axios.get(`http://api.weatherstack.com/current?access_key=${REACT_APP_API_WEATHER_ACCESS_KEY}&query=${q}`)
}
 export {
      getTodos,
      getWeatherInfo
  }