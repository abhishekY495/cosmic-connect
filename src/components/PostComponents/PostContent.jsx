import React from "react";
import { Link } from "react-router-dom";

export default function PostContent({ post }) {
  return (
    <>
      <Link to={`/${post?.userName}/post/${post?.id}`}>
        <p className="py-1 whitespace-pre-wrap">{post?.content}</p>
        {post?.media.image && (
          <img
            src={post?.media.image}
            alt={`post by ${post?.fullName}`}
            className="object-contain w-full h-96 bg-zinc-950"
          />
        )}
        {post?.media.video && (
          <iframe
            src={post?.media.video}
            title={post?.media.content}
            className="w-full h-96"
            allowFullScreen
          ></iframe>
        )}
      </Link>
    </>
  );
}
