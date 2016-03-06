import { Component } from "react";
//let m = React.DOM;

import { IPosts } from "client/common/collections";

export interface IComponentProps {
  posts: IPosts[]
}

const PostList = ({posts}) => (
  <div className="postlist">
    <ul>
      {posts.map((post: IPosts) => (
        <li key={post._id}>
          <a href={`/post/${post._id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
