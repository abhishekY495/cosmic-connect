import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { PostsDataContext } from "../contexts/PostsDataContext";
import { AuthContext } from "../contexts/AuthContext";
import crossIcon from "../assets/posts/cross-icon.svg";

export default function PostFormModal({ open, onClose }) {
  const { dispatch } = useContext(PostsDataContext);
  const { currentUser } = useContext(AuthContext);
  const [postContent, setPostContent] = useState("");
  const [userImage, setUserImage] = useState("");

  const handleImage = (e) => {
    setUserImage(e.target.files[0]);
  };

  const { userName, fullName, avatar, verified } = currentUser;

  const closeModal = () => {
    setUserImage("");
    onClose();
  };

  const uploadPost = () => {
    const newPost = {
      id: uuidv4(),
      userName,
      fullName,
      avatar,
      verified,
      content: postContent,
      media: {
        image: userImage ? URL.createObjectURL(userImage) : "",
        video: "",
      },
      createdAt: new Date(),
      updatedAt: "",
      likedBy: [],
      bookmarkedBy: [],
      comments: [],
    };
    dispatch({ type: "CREATE_POST", payload: newPost });
    // dispatch({ type: "FILTER_BY_CREATED_AT" });
    closeModal();
  };

  if (!open) return null;
  return (
    <div
      id="overlay"
      className="fixed bg-zinc-400/50 w-screen h-screen z-[2]"
      onClick={closeModal}
    >
      <div
        id="modal-container"
        className="max-w-md m-auto mt-16 p-4 bg-slate-100 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <p>New Post</p>
          <img
            src={crossIcon}
            onClick={closeModal}
            className="w-5 bg-slate-300/50 backdrop:blur-md p-1 m-1 rounded-full hover:cursor-pointer"
            alt="cancel"
          />
        </div>
        <textarea
          cols="50"
          rows="3"
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
        <div className="flex justify-center">
          {userImage && (
            <div className="relative">
              <img
                src={crossIcon}
                onClick={() => setUserImage("")}
                className="absolute right-1 w-6 bg-slate-100/50 backdrop:blur-lg p-1 mt-1 rounded-full hover:cursor-pointer"
                alt="delete"
              />
              <img
                className="w-full h-52 object-cover"
                src={URL.createObjectURL(userImage)}
                alt="user upload"
              />
            </div>
          )}
        </div>
        <div className="flex justify-end gap-2">
          <label htmlFor="file" className="hover:cursor-pointer">
            <input
              className="hidden"
              type="file"
              id="file"
              onChange={handleImage}
            />
            🖼️
          </label>
          <button onClick={uploadPost}>Post</button>
        </div>
      </div>
    </div>
  );
}
