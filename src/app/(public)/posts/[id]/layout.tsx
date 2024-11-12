import React from 'react';
import {Metadata} from "next"
export const metadata: Metadata = {
title: 'Post info'
}
type Props = {
children: React.ReactNode
}
const PostLayout = ({children}:Props) => {
 return (
  <>
   {children}
  </>
 );
};

export default PostLayout;