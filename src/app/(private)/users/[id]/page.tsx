import React from 'react';
type Params = {
    id: string;
}
const UserPage = async({params}:{params: Params}) => {

   const user = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
       .then(value => value.json())

    return (
        <div>
            <h1>{user.id}</h1>
            <h2>{user.name}</h2>

        </div>
    );
};

export default UserPage;