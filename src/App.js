
import './App.css';
import { useEffect,useState} from 'react';
import React from 'react'
import PostService from './services/postService';


function App() {
const [posts, setposts] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems =async () => {
//axios.get ("https://jsonplaceholder.typicode.com/posts")
//.then((response)=>{console.log(response)})
//.catch((error)=>{console.log(error)})
//.finally(()=>{console.log("async işlem bitti")});

try {
  
  let postService = new PostService();
  let response = await postService.getAll();
  setposts(response.data);
} catch (e) {
  console.log(e);
}
  }
  const removePost = (id) => {
    setposts(posts.filter(i => i.id !== id));
  }
  return (
    <div className="App">
      {/*Parent-Child*/}
    {posts.map((post)=><postCard onDelete ={removePost} post={post} />)}
    </div>
  );
}

export default App;
