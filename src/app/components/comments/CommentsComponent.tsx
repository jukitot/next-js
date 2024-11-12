import React, {FC} from 'react';
import Link from "next/link";
type Props = {
    comments: {id: number, name: string}[]
}
const CommentsComponent:FC<Props> = ({comments}) => {
    return (
        <div>
            {
                comments.map(({id, name}) => (<div key={id}>
                    <Link href={'/comments/' + id}>{id}. {name}</Link>
                </div>))
            }
        </div>
    );
};

export default CommentsComponent;