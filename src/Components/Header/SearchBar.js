import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SubredditSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`https://www.reddit.com/subreddits/search.json?q=${searchTerm}`)
        .then((response) => {
          const subredditData = response.data.data.children
            .slice(0, 5) // Limit results to the first 5 subreddits
            .map((child) => {
              return {
                name: child.data.display_name,
                subscribers: child.data.subscribers,
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
      <ul>
        {subreddits.map((subreddit) => (
          <li key={subreddit.name}>
            {subreddit.name} - Subscribers: {subreddit.subscribers}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubredditSearch;
