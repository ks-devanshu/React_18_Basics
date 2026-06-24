import axios, { CanceledError } from "axios";

export default axios.create( {
    baseURL: 'https://www.freetogame.com/api'
} );

export { CanceledError };