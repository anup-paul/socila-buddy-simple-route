import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h3>To total Post {posts.length}</h3>
            {
                posts.map(post => <Posts post={post} key={post.id} ></Posts>)
            }
        </div>
    );
};

export default Home;