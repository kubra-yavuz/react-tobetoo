
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'
import PostService from './services/postService';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Posts from './pages/Posts/Posts.jsx';



function App() {
  const [posts, setPosts] = useState([]);

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
      setPosts(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  const removePost = (id) => {
    setPosts(posts.filter(i => i.id !== id));
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} /> {/*sayfa ilk açıldığında*/}
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} /> {/*NotFound sayfası*/}
      </Routes>

    </>
  );
}

export default App;
