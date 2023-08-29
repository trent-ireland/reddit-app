import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SubredditPosts.css';

 

function SubredditPosts({ subredditName }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.reddit.com/r/${subredditName}/top.json?limit=5`)
      .then((response) => {
        const postData = response.data.data.children.map((child) => {
          const { title, thumbnail } = child.data;
          return { title, thumbnail };
        });
        setPosts(postData);
      })
      .catch((error) => {
        console.error('Error fetching post data:', error);
      });
  }, [subredditName]);

  return (
    <div>
      <h2>Top 5 Posts in {subredditName}</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <img src={post.thumbnail} alt="Thumbnail" />
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubredditPosts;
