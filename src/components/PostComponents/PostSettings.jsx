import React, { useContext, useState } from "react";

import optionsIcon from "../../assets/posts/options-icon.svg";
import deleteIcon from "../../assets/posts/delete-icon.svg";
import editIcon from "../../assets/posts/edit-icon.svg";
import { PostsDataContext } from "../../contexts/PostsDataContext";
import { AuthContext } from "../../contexts/AuthContext";

export default function PostSettings({ post }) {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(PostsDataContext);
  const [hideOptions, setHideOptions] = useState(true);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const deletePost = (postId) => {
    dispatch({ type: "DELETE_POST", payload: postId });
    setHideOptions(true);
  };

  const toggleOptions = (id) => {
    setHideOptions(!hideOptions);
    if (selectedPostId === id) {
      setSelectedPostId(null);
    } else {
      setSelectedPostId(id);
    }
  };

  return (
    <>
      {currentUser.userName === post?.userName && (
        <div className="flex gap-3 relative">
          <img
            src={optionsIcon}
            className="w-5 hover:cursor-pointer"
            onClick={() => toggleOptions(post?.id)}
            alt="options"
          />
          {currentUser.userName === post?.userName &&
            selectedPostId === post?.id && (
              <div
                className={`${
                  hideOptions
                    ? "hidden"
                    : "flex flex-col gap-1 bg-slate-200/50 border-[1px] backdrop-blur-md w-max p-2 px-4 rounded absolute top-5 right-0"
                }`}
              >
                <span className="flex gap-2 hover:cursor-pointer">
                  <img src={editIcon} className="w-5" alt="edit" />
                  Edit
                </span>
                <span
                  className="flex gap-2 hover:cursor-pointer"
                  onClick={() => deletePost(post?.id)}
                >
                  <img src={deleteIcon} className="w-5" alt="delete" />
                  Delete
                </span>
              </div>
            )}
        </div>
      )}
    </>
  );
}
