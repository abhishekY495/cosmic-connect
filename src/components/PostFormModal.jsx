import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { PostsDataContext } from "../contexts/PostsDataContext";
import { AuthContext } from "../contexts/AuthContext";
import crossIcon from "../assets/posts/cross-icon.svg";

export default function PostFormModal({ open, onClose, postToEdit }) {
  const { dispatch } = useContext(PostsDataContext);
  const {
    currentUser: { userName, fullName, avatar, verified },
  } = useContext(AuthContext);
  const [postContent, setPostContent] = useState(
    postToEdit ? postToEdit?.content : ""
  );
  const [postMedia, setPostMedia] = useState(
    postToEdit ? postToEdit?.media : ""
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const allowedFileExt = ["png", "gif", "jpeg", "jpg", "mp4"];

  const handleMedia = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    let isAllowed = false;
    allowedFileExt.forEach((ext) => {
      if (file.type.includes(ext)) {
        isAllowed = true;
        setPostMedia(URL.createObjectURL(file));
      }
    });
    if (!isAllowed) {
      alert("File not allowed");
      setPostMedia("");
    }
  };

  const closeModal = () => {
    !postToEdit && setPostMedia("") && setPostMedia("");
    onClose();
  };

  const uploadPost = () => {
    if (postToEdit) {
      const updatedPost = {
        ...postToEdit,
        content: postContent,
        media: postMedia,
        isVideo: selectedFile && selectedFile.type.includes("mp4") ? true : false,
        edited: true,
      };
      dispatch({ type: "UPDATE_POST", payload: { postToEdit, updatedPost } });
      closeModal();
    } else {
      const newPost = {
        id: uuidv4(),
        userName,
        fullName,
        avatar,
        verified,
        content: postContent,
        media: postMedia,
        isVideo: selectedFile.type.includes("mp4") ? true : false,
        createdAt: new Date(),
        updatedAt: "",
        likedBy: [],
        bookmarkedBy: [],
        comments: [],
      };
      dispatch({ type: "CREATE_POST", payload: newPost });
      closeModal();
    }
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
          <p>{postToEdit ? "Edit Post" : "New Post"}</p>
          <img
            src={crossIcon}
            onClick={closeModal}
            className="w-5 bg-slate-300/50 backdrop:blur-md p-1 m-1 rounded-full hover:cursor-pointer"
            alt="cancel"
          />
        </div>
        <textarea
          cols="50"
          rows="5"
          defaultValue={postContent}
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
              {selectedFile?.type?.includes("mp4") || postToEdit?.isVideo ? (
                <iframe
                  src={postMedia}
                  className="w-full h-52"
                  title="user upload"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  className="w-full h-52 object-contain bg-zinc-950"
                  src={postMedia}
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
              accept="image/png, image/gif, image/jpeg, image/jpg, video/mp4"
              onChange={handleMedia}
            />
            🖼️
          </label>
          <button onClick={uploadPost}>{postToEdit ? "Update" : "Post"}</button>
        </div>
      </div>
    </div>
  );
}
