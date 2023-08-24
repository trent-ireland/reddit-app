import React, { useState, useEffect } from 'react';
import './Popular.css'

const Popular = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://www.reddit.com/r/popular/top.json?limit=10')
            .then(response => response.json())
            .then(data => {
                setPosts(data.data.children.map(post => post.data));
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching popular posts:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Popular on Reddit</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                    <img src={post.thumbnail} alt={post.title} className="thumbnail" />
                    <a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer">
                        {post.title}
                    </a>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Popular;
