import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";

import optionsIcon from "../../assets/posts/options-icon.svg";
import deleteIcon from "../../assets/posts/delete-icon.svg";
import editIcon from "../../assets/posts/edit-icon.svg";
import darkOptionsIcon from "../../assets/posts/dark-options-icon.svg";
import { PostsDataContext } from "../../contexts/PostsDataContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import PostFormModal from "../PostFormModal";

export default function PostSettings({ post }) {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(PostsDataContext);
  const {
    theme: { darkMode },
  } = useContext(ThemeContext);
  const [hideOptions, setHideOptions] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const deletePost = (postId) => {
    setHideOptions(true);
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          dispatch({ type: "DELETE_POST", payload: postId });
          resolve();
        }, 1500);
      }),
      { loading: "Deleting", success: "Deleted" }
    );
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
            src={darkMode ? darkOptionsIcon : optionsIcon}
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
                className={`${
                  darkMode && "text-black font-medium"
                } flex gap-2 hover:cursor-pointer`}
              >
                <img src={deleteIcon} className="w-5" alt="delete" />
                Delete
              </span>
              <span
                onClick={() => editPost(post?.id)}
                className={`${
                  darkMode && "text-black font-medium"
                } flex gap-2 hover:cursor-pointer`}
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
