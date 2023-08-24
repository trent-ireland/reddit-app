import React from 'react';
import './SearchBar.css'
const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search subreddit..."
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
