import axios, { CanceledError } from "axios";

export default axios.create( {
    baseURL: 'https://jsonplaceholder.typicode.com',
    // if required
    // headers : {
    //     'api-key': '...'
    // }
} );

export { CanceledError };