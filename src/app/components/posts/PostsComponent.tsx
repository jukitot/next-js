import React, {FC} from 'react';
import Link from "next/link";
type Props = {
    posts: {id: number, title: string}[]
}
const PostsComponent:FC<Props> = ({posts}) => {
    return (
        <div>
            {posts.map(({id, title})=>(<div key={id}>
                <Link href={'/posts/' + id}>{id}. {title}</Link>
            </div>))}
        </div>
    );
};

export default PostsComponent;