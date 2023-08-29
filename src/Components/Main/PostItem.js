import React, { useState } from 'react';
import axios from 'axios';

function PostItem({ name, subscribers, imageUrl }) {
    const [posts, setPosts] = useState([]);
  
    const fetchPosts = () => {
      axios
        .get(`https://www.reddit.com/r/${name}/top.json?limit=10`)
        .then((response) => {
          const postData = response.data.data.children.map(child => child.data);
          setPosts(postData);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);
        });
    };
  
    return (
      <div className="post-container">
        <img src={imageUrl} alt={name} className="subreddit-image" />
        <div className="post-details">
          <h3 onClick={fetchPosts}>{name}</h3>
          <p>Subscribers: {subscribers}</p>
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  export default PostItem;
  