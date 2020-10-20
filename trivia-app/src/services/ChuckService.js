import axios from 'axios';

const Chuck = require('chucknorris-io')
class ChuckService {
    constructor(){
        this.client = new Chuck();
        this.category = ''
    }
    async getRandomJoke(category){
        const joke = await this.client.getRandomJoke(category);
        return joke;
    }
    async getCategories(){
        const { data } = await axios.get('https://api.chucknorris.io/jokes/categories');
        return data;
    }
    getCategory(category){
        // console.log(category);
        this.category = category
        console.log(this.category);
    }
}

const chuckService = new ChuckService();
export default chuckService;