import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css';
import PostItem from '../Main/PostItem';
// Assuming you have a separate Post component, import it here:
// import Post from './Post';

function SubredditSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => { // Removed the '.' before useEffect
    if (searchTerm) {
      axios
        .get(`https://www.reddit.com/subreddits/search.json?q=${searchTerm}`)
        .then((response) => {
          const subredditData = response.data.data.children
            .slice(0, 5)
            .map((child) => {
              return {
                name: child.data.display_name,
                subscribers: child.data.subscribers,
                imageUrl: child.data.header_img || child.data.icon_img // Extract the image URL
              };
            });
          setSubreddits(subredditData);
        })
        .catch((error) => {
          console.error('Error fetching subreddit data:', error);
        });
    } else {
      setSubreddits([]);
    }
  }, [searchTerm]);
  
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search subreddits..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="posts">
        {subreddits.map((subreddit) => (
          <PostItem 
            key={subreddit.name}
            name={subreddit.name}
            subscribers={subreddit.subscribers}
            imageUrl={subreddit.imageUrl}
          />
        ))}
      </div>
    </div>
  );
} // Added the closing brace for the function

export default SubredditSearch;
