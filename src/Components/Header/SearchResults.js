import React, { useState } from 'react';
import SubredditPosts from './SubredditPosts';
import './SearchResults.css';

function SearchResults({ subreddits }) {
  const [selectedSubreddit, setSelectedSubreddit] = useState(null);

  const handleSubredditClick = (subredditName) => {
    setSelectedSubreddit(subredditName);
  };

  return (
    <div className="search-results">
      <ul>
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.name}
            onClick={() => handleSubredditClick(subreddit.name)}
          >
            {subreddit.name} - Subscribers: {subreddit.subscribers}
          </li>
        ))}
      </ul>
      {selectedSubreddit && <SubredditPosts subredditName={selectedSubreddit} />}
    </div>
  );
}

export default SearchResults;
