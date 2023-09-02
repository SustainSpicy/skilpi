import React from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { posts } from "../constants";

const AllPosts = () => {
  return (
    <>
      <Header />
      <div className="flex gap-4">
        {posts.map((item, index) => {
          return <PostCard {...item} />;
        })}
      </div>
    </>
  );
};

export default AllPosts;
