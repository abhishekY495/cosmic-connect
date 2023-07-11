import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

import { AuthContext } from "../../contexts/AuthContext";
import { PostsDataContext } from "../../contexts/PostsDataContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function CommentBox() {
  const { postId } = useParams();
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(PostsDataContext);
  const {
    theme: { darkMode },
  } = useContext(ThemeContext);
  const [commentContent, setCommentContent] = useState("");
  const [disable, setDisable] = useState(false);

  const commentBtnHandler = () => {
    setDisable(true);
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          const userComment = {
            id: uuidv4(),
            content: commentContent,
            commentedAt: new Date(),
            ...currentUser,
          };
          dispatch({
            type: "ADD_COMMENT",
            payload: { currentUser, userComment, postId },
          });
          setCommentContent("");
          setDisable(false);
          resolve();
        }, 1500);
      }),
      { loading: "Adding comment", success: "Done" }
    );
  };

  return (
    <div className="relative">
      <textarea
        onChange={(e) => setCommentContent(e.target.value)}
        className={`${
          darkMode ? "bg-zinc-700 text-white" : "bg-zinc-100"
        } w-full h-20 border p-1 pl-2 mt-2 mb-1 resize-none focus:outline-zinc-300 focus:outline-1 focus:border-none`}
        value={commentContent}
        disabled={disable}
      ></textarea>
      <button
        onClick={commentBtnHandler}
        className={`${
          darkMode && "text-black"
        } absolute right-1 bottom-4 bg-blue-300 px-3 rounded-md py-[2px] ${
          commentContent.length === 0 || disable
            ? "hover:cursor-not-allowed opacity-60"
            : "hover:cursor-pointer hover:bg-blue-400"
        }`}
        disabled={commentContent.length === 0 || disable}
      >
        Comment
      </button>
    </div>
  );
}
