import axios from "axios";

class PostService {
getAll(){
   return axios.get("https://jsonplaceholder.typicode.com/posts");
}
}

export default new PostService; // export ederken new yazarsak app.js de sürekli newlememize gerek kalmaz.