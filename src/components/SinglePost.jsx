import React from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const { username, id } = useParams();
  return (
    <div>
      <p>{username}</p>
      <p>{id}</p>
    </div>
  );
}
