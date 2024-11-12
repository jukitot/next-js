import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/users'}>USERS</Link>
                </li>
                <li>
                    <Link href={'/posts'}>POSTS</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;