import React from 'react';
import PostsComponent from "@/app/components/posts/PostsComponent";
import styles from './posts.module.css'

const PostsPage = async() => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
    return (
        <div className={styles.postsBlock}>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;