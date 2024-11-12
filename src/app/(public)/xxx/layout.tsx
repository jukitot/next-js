import React from 'react';
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'public layout',
    description: 'public metadata'
}
type Props = {
    children: React.ReactNode
}
const PublicLayout = ({children}:Props) => {
    return (
        <div>
            public layout
            {children}
        </div>
    );
};

export default PublicLayout;