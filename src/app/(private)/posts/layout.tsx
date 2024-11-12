import React from 'react';
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'public layout',
    description: 'public metadata'
}
type Props = {
    children: React.ReactNode
}
const PostsLayout = ({children}:Props) => {
    return (
        <div>
            posts layout
            {children}
        </div>
    );
};

export default PostsLayout;