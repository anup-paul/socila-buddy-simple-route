import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Posts = (props) => {
    const {id,title,body} = props.post;
    let history = useHistory();
    const handleClick = (postId) => 
    {
        history.push(`/post/${postId}`)
    }
    return (
        <div>
            <h3><strong>Id:{id}</strong>{title}</h3>
            <p>{body}</p>
            {/* <Link to={`/post/${id}`}>Details</Link> */}
            <button onClick={() => handleClick(id)}>Click for details</button>
        </div>
    );
};

export default Posts;