import React from "react";
import { Link } from "react-router-dom";

export default function PostContent({ post }) {
  return (
    <>
      <Link to={`/${post?.userName}/post/${post?.id}`}>
        <p className="py-1 whitespace-pre-wrap">{post?.content}</p>
        {post?.media && post?.isVideo ? (
          <video className="w-full h-96 bg-black" controls>
            <source src={post?.media} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
        ) : (
          post?.media && (
            <img
              src={post?.media}
              alt={`post by ${post?.fullName}`}
              className="object-contain w-full h-96 bg-zinc-950"
            />
          )
        )}
      </Link>
    </>
  );
}
