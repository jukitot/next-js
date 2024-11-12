import React from 'react';
import CommentsComponent from "@/app/components/comments/CommentsComponent";
import style from './comments.module.css'

const CommentsPage = async() => {
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
    return (
        <div className={style.commentsBlock}>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;