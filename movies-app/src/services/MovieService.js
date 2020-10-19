import axios from 'axios'
export default class MovieService{
    
    constructor(){
            this.apiClient = axios.create({
            baseUrl: 'http://localhost:3000/api/'
        })
        
    }
    async getAll(){
        const { data } = await axios.get('http://localhost:3000/api/movies')
        return data
    }


}

export const movieService = new MovieService();