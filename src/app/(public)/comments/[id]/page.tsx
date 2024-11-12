import React from 'react';
import styles from './comment.module.css'

type Params = {
    id: string
}
const CommentsPage = async({params}:{params:Params}) => {
const comment = await fetch('https://jsonplaceholder.typicode.com/comments/' + params.id)
    .then(value => value.json())
    return (
        <div className={styles.CommentBlock}>
            <h1>{comment.id}</h1>
            <p>{comment.email}</p>
            <h2>{comment.name}</h2>
            <h3>{comment.body}</h3>
        </div>
    );
};

export default CommentsPage;