import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { AuthContext } from "../../contexts/AuthContext";
import { PostsDataContext } from "../../contexts/PostsDataContext";

export default function CommentBox() {
  const { postId } = useParams();
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(PostsDataContext);
  const [commentContent, setCommentContent] = useState("");

  const commentBtnHandler = () => {
    const userComment = {
      id: uuidv4(),
      content: commentContent,
      ...currentUser,
    };
    dispatch({
      type: "ADD_COMMENT",
      payload: { currentUser, userComment, postId },
    });
    setCommentContent("");
  };

  return (
    <div className="relative">
      <textarea
        onChange={(e) => setCommentContent(e.target.value)}
        className="w-full h-20 border p-1 pl-2 mt-2 mb-1 resize-none focus:outline-zinc-300 focus:outline-1 focus:border-none"
        value={commentContent}
      ></textarea>
      <button
        onClick={commentBtnHandler}
        className={`absolute right-1 bottom-4 bg-blue-300 px-3 rounded-md py-[2px] ${
          commentContent.length === 0
            ? "hover:cursor-not-allowed opacity-60"
            : "hover:cursor-pointer hover:bg-blue-400"
        }`}
        disabled={commentContent.length === 0}
      >
        Comment
      </button>
    </div>
  );
}
