
import './App.css';
import { useEffect,useState} from 'react';
import axios from 'axios';
import React from 'react'


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
  let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  
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
    {posts.map((post)=><postCard onDelete ={removePost} post={post} />)}
    </div>
  );
}

export default App;
