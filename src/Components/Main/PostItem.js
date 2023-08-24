import React from "react";

const PostItem = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>By: {post.author}</p>
      <a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
}
export default PostItem;
