import React from 'react';
import './SearchBar.js'
import 'SearchResults.css'
function SearchResults({ subreddits }) {
  return (
    <ul>
      {subreddits.map((subreddit) => (
        <li key={subreddit.name}>
          {subreddit.name} - Subscribers: {subreddit.subscribers}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;