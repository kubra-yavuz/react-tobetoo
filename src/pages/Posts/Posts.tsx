import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "semantic-ui-react";
import { cartActions } from '../../store/slices/cartSlice';
import PostCard from '../../components/PostCard/PostCard';
import { Post } from '../../models/post';
import { getAllPosts } from '../../store/slices/postSlise';


function Posts() {
  const dispatch = useDispatch();

  const postState = useSelector((state: any) => state.post);
  console.log(postState);
  
  useEffect(() => {
    dispatch(getAllPosts() as any);
  }, []);

  return (
    <div>
      Posts
      {postState.posts.map((post: Post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
} 

export default Posts;
