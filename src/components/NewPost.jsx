import React from "react";

export default function NewPost({ usersPost }) {
  return (
    <input
      className={`border-[1px] sticky ${usersPost ? "top-[104px]" : "top-0"}`}
      type="text"
      placeholder="New Post"
    />
  );
}
