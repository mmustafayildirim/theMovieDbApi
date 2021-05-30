import {api_key,base_url} from "../config"

export default class Search{
    constructor(keyword){
        this.keyword=keyword
    }
    async  getResult(keyword){
        const response=await fetch(`${base_url}/search/movie?api_key=${api_key}&query=${this.keyword}&page=1`);
         this.data=await response.json();
        
    }
  
}