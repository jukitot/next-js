import React from 'react';
import Link from "next/link";
import styles from './menu.module.css'

const Menu = () => {
    return (
        <div className={styles.menu}>
            <ul>
                <li>
                    <Link href={'/users'}>USERS</Link>
                </li>
                <li>
                    <Link href={'/posts'}>POSTS</Link>
                </li>
                <li>
                    <Link href={'/comments'}>COMMENTS</Link>
                </li>

            </ul>
        </div>
    );
};

export default Menu;