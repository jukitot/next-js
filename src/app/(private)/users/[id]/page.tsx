import React from 'react';
import styles from './user.module.css'
type Params = {
    id: string;
}
const UserPage = async({params}:{params: Params}) => {

   const user = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
       .then(value => value.json())

    return (
        <div className={styles.UserBlock}>
            <h1>{user.id}</h1>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <p>{user.phone}</p>

        </div>
    );
};

export default UserPage;