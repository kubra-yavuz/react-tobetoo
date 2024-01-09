
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'
import PostService from './services/postService';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Posts from './components/postCard/PostCard';
import NotFound from './pages/NotFound/NotFound';



function App() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = async () => {
    //axios.get ("https://jsonplaceholder.typicode.com/posts")
    //.then((response)=>{console.log(response)})
    //.catch((error)=>{console.log(error)})
    //.finally(()=>{console.log("async işlem bitti")});

    try {


      let response = await PostService.getAll();
      setposts(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  const removePost = (id) => {
    setposts(posts.filter(i => i.id !== id));
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/*sayfa ilk açıldığında*/}
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound/>}/> {/*NotFound sayfası*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
