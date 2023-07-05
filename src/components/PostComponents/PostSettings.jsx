import React, { useContext, useState } from "react";

import optionsIcon from "../../assets/posts/options-icon.svg";
import deleteIcon from "../../assets/posts/delete-icon.svg";
import editIcon from "../../assets/posts/edit-icon.svg";
import { PostsDataContext } from "../../contexts/PostsDataContext";
import { AuthContext } from "../../contexts/AuthContext";
import PostFormModal from "../PostFormModal";

export default function PostSettings({ post }) {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(PostsDataContext);
  const [hideOptions, setHideOptions] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const deletePost = (postId) => {
    dispatch({ type: "DELETE_POST", payload: postId });
    setHideOptions(true);
  };

  const editPost = () => {
    setOpenModal(true);
    setHideOptions(true);
  };

  const toggleOptions = () => {
    setHideOptions(!hideOptions);
  };

  return (
    <>
      <PostFormModal
        postToEdit={post}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      {currentUser.userName === post?.userName && (
        <div className="flex gap-3 relative">
          <img
            src={optionsIcon}
            className="w-5 hover:cursor-pointer"
            onClick={toggleOptions}
            alt="options"
          />
          <div
            className={`${
              hideOptions
                ? "hidden"
                : "flex flex-col gap-1 bg-slate-200/50 border-[1px] backdrop-blur-md w-max p-2 px-4 rounded absolute top-5 right-0"
            }`}
          >
            <>
              <span
                onClick={() => deletePost(post?.id)}
                className="flex gap-2 hover:cursor-pointer"
              >
                <img src={deleteIcon} className="w-5" alt="delete" />
                Delete
              </span>
              <span
                onClick={() => editPost(post?.id)}
                className="flex gap-2 hover:cursor-pointer"
              >
                <img src={editIcon} className="w-5" alt="delete" />
                Edit
              </span>
            </>
          </div>
        </div>
      )}
    </>
  );
}
