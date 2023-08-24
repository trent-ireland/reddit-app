import React, { useState } from 'react';
import './SearchBar.css'
import PostItem from '../Main/PostItem';

const SearchBar = () => {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState('');

  const handleInputChange = (event) => {
    setSubreddit(event.target.value);
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      const data = await response.json();
      setPosts(data.data.children.map(item => item.data));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search subreddit..."
        value={subreddit}
        onChange={handleInputChange}
      />
      <button onClick={fetchPosts}>Search</button>
      <div>
        {posts.map(post => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default SearchBar;
