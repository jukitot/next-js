import React from 'react';
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'public layout',
    description: 'public metadata'
}
type Props = {
    children: React.ReactNode
}
const UsersLayout = ({children}:Props) => {
    return (
        <div>
            users layout
            {children}
        </div>
    );
};

export default UsersLayout;