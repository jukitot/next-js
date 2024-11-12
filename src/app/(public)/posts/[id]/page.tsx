import React from 'react';
import style from './post.module.css'
type Params = {
    id: string
}

const PostPage = async({params}:{params: Params}) => {
    const post  = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
        .then(value => value.json())
    return (
        <div className={style.PostBlock}>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
        </div>
    );
};

export default PostPage;