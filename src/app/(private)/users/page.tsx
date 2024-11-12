import React from 'react';
import UsersComponent from "@/app/components/users/UsersComponent";
import styles from './users.module.css'

const UsersPage = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    return (
        <div className={styles.usersBlock}>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;