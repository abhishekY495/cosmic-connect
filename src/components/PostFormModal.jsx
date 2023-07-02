import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { PostsDataContext } from "../contexts/PostsDataContext";
import { AuthContext } from "../contexts/AuthContext";
import crossIcon from "../assets/posts/cross-icon.svg";

export default function PostFormModal({ open, onClose }) {
  const { dispatch } = useContext(PostsDataContext);
  const {
    currentUser: { userName, fullName, avatar, verified },
  } = useContext(AuthContext);
  const [postContent, setPostContent] = useState("");
  const [postMedia, setPostMedia] = useState("");
  const allowedFileExt = ["png", "gif", "jpeg", "mp4"];

  const handleMedia = (e) => {
    const file = e.target.files[0];
    let isAllowed = false;
    allowedFileExt.forEach((ext) => {
      if (file.type.includes(ext)) {
        isAllowed = true;
        setPostMedia(file);
      }
    });
    if (!isAllowed) {
      alert("File not allowed");
      setPostMedia("");
    }
  };

  const closeModal = () => {
    setPostMedia("");
    setPostContent("");
    onClose();
  };

  const uploadPost = () => {
    const media = () => {
      if (postMedia) {
        const fileExt = postMedia.type;
        if (fileExt.includes("mp4")) {
          return {
            image: "",
            video: URL.createObjectURL(postMedia),
          };
        } else if (
          fileExt.includes("png") ||
          fileExt.includes("gif") ||
          fileExt.includes("jpg") ||
          fileExt.includes("jpeg")
        ) {
          return {
            image: URL.createObjectURL(postMedia),
            video: "",
          };
        }
      } else {
        return {
          image: "",
          video: "",
        };
      }
    };
    const newPost = {
      id: uuidv4(),
      userName,
      fullName,
      avatar,
      verified,
      content: postContent,
      media: media(),
      createdAt: new Date(),
      updatedAt: "",
      likedBy: [],
      bookmarkedBy: [],
      comments: [],
    };
    dispatch({ type: "CREATE_POST", payload: newPost });
    closeModal();
  };

  if (!open) return null;
  return (
    <div
      id="overlay"
      className="fixed top-0 right-0 bg-zinc-500/50 w-screen h-screen z-[2]"
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
          {postMedia && (
            <div className="relative">
              <img
                src={crossIcon}
                onClick={() => setPostMedia("")}
                className="absolute right-1 w-6 bg-slate-100/50 backdrop:blur-lg p-1 mt-1 rounded-full hover:cursor-pointer"
                alt="delete"
              />
              {postMedia.type.includes("mp4") ? (
                <iframe
                  src={URL.createObjectURL(postMedia)}
                  className="w-full h-52"
                  title="user upload"
                ></iframe>
              ) : (
                <img
                  className="w-full h-52 object-cover"
                  src={URL.createObjectURL(postMedia)}
                  alt="user upload"
                />
              )}
            </div>
          )}
        </div>
        <div className="flex justify-end gap-2">
          <label htmlFor="file" className="hover:cursor-pointer">
            <input
              className="hidden"
              type="file"
              id="file"
              accept="image/png, image/gif, image/jpeg, image/jpg, video/mp4, video/mpv"
              onChange={handleMedia}
            />
            🖼️
          </label>
          <button onClick={uploadPost}>Post</button>
        </div>
      </div>
    </div>
  );
}
