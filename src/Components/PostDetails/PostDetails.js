import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    let { postId } = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    useEffect(() =>
    {
        const url = (`https://jsonplaceholder.typicode.com/posts/${postId}`)
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    useEffect(() =>
    {
        const url = (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            <h2>This is post details Id:{postId}</h2>
            <h2>Title:{post.title}</h2>
            <h5>{post.body}</h5>
            <h2>Total Comments:{comments.length}</h2>
            {
                comments.map(com => <Comments comment = {com} ></Comments>)
            }
        </div>
    );
};

export default PostDetails;