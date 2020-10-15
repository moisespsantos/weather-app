import axios from 'axios';

const getTodos = async () => {
       return await axios.get('https://jsonplaceholder.typicode.com/todos')
}

const getWeatherInfo = async (q) => {
       return await axios.get(`http://api.weatherstack.com/current?access_key=8137a87a11b80298c2d2f181b23e65bd&query=${q}`)
}

 export {
      getTodos,
      getWeatherInfo
  }