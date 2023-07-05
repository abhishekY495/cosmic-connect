import React from "react";
import { Link } from "react-router-dom";

export default function PostContent({ post }) {
  return (
    <>
      <Link to={`/${post?.userName}/post/${post?.id}`}>
        <p className="py-1 whitespace-pre-wrap">{post?.content}</p>
        {post?.media && post?.isVideo ? (
          <iframe
            src={post?.media}
            title={`post video by ${post?.fullName}`}
            className="w-full h-96"
            allowFullScreen
          ></iframe>
        ) : (
          post?.media && (
            <img
              src={post?.media}
              alt={`post image by ${post?.fullName}`}
              className="object-contain w-full h-96 bg-zinc-950"
            />
          )
        )}
      </Link>
    </>
  );
}
