import axios from 'axios';

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '66311435b5ddfea993a5c2cfdb55b4c4',
        language: 'es-ES',
    },
    }
);

export default movieDB;
