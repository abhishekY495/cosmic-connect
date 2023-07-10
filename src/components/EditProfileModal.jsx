import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";

import crossIcon from "../assets/profile/cross-icon.svg";
import { UsersDataContext } from "../contexts/UsersDataContext";
import { AuthContext } from "../contexts/AuthContext";
import { PostsDataContext } from "../contexts/PostsDataContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function EditProfileModal({ open, onClose, userProfile }) {
  const { currentUser } = useContext(AuthContext);
  const { dispatch: usersDispatch } = useContext(UsersDataContext);
  const { dispatch: postsDispatch } = useContext(PostsDataContext);
  const {
    theme: { darkMode },
  } = useContext(ThemeContext);
  const [fullName, setFullName] = useState(
    userProfile && userProfile?.fullName
  );
  const [avatar, setAvatar] = useState(userProfile && userProfile?.avatar);
  const [bio, setBio] = useState(userProfile && userProfile?.bio);
  const [website, setWebsite] = useState(userProfile && userProfile?.website);
  const [disable, setDisable] = useState(false);
  const allowedFileExt = ["png", "jpeg", "jpg"];

  const closeModal = () => {
    onClose();
    setAvatar(userProfile?.avatar);
    setFullName(userProfile?.fullName);
    setBio(userProfile?.bio);
    setWebsite(userProfile?.website);
  };

  const handleMedia = (e) => {
    const file = e.target.files[0];
    let isAllowed = false;
    allowedFileExt.forEach((ext) => {
      if (file.type.includes(ext)) {
        isAllowed = true;
        setAvatar(URL.createObjectURL(file));
      }
    });
    if (!isAllowed) {
      alert("File not allowed");
    }
  };

  const updateUserProfile = () => {
    setDisable(true);
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          const updatedUserProfile = {
            ...currentUser,
            fullName,
            bio,
            avatar,
            website,
          };
          usersDispatch({
            type: "UPDATE_USER_PROFILE",
            payload: { updatedUserProfile, currentUser },
          });
          postsDispatch({
            type: "UPDATE_USER_DATA",
            payload: { updatedUserProfile, currentUser },
          });
          setDisable(false);
          closeModal();
          resolve();
        }, 1500);
      }),
      { loading: "Updating", success: "Profile Updated" }
    );
  };

  if (!open) {
    return null;
  } else {
    return (
      <div
        id="overlay-profile"
        className="fixed top-0 right-0 bg-zinc-500/50 w-screen h-screen z-[20]"
        onClick={closeModal}
      >
        <div
          id="edit-profile-modal"
          className={`${
            darkMode ? "text-black bg-gray-200" : "bg-white"
          } flex flex-col gap-[10px] w-[320px] m-auto p-5 mt-8 relative rounded-md`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={crossIcon}
            className="w-6 bg-slate-300 p-1 absolute right-3 top-3 rounded-full hover:cursor-pointer"
            alt="cross"
            onClick={closeModal}
          />
          <img
            src={avatar}
            className="w-[50%] h-[140px] object-cover m-auto rounded-full"
            alt="user profile"
          />
          <label
            htmlFor="update-avatar"
            className="relative hover:cursor-pointer"
          >
            <span className="absolute bg-yellow-400 rounded-full p-1 pt-0 bottom-3 right-20">
              📷
            </span>
            <input
              id="update-avatar"
              type="file"
              onChange={handleMedia}
              className="hidden"
              accept="image/png, image/jpeg, image/jpg"
              disabled={disable}
            />
          </label>
          <label>
            Full Name
            <input
              className="border w-full pl-1"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              defaultValue={fullName}
              disabled={disable}
            />
          </label>
          <label>
            Bio
            <textarea
              className="border w-full pl-1 resize-none"
              onChange={(e) => setBio(e.target.value)}
              defaultValue={bio}
              maxLength={35}
              disabled={disable}
            ></textarea>
          </label>
          <label>
            Website
            <input
              className="border w-full pl-1"
              type="text"
              onChange={(e) => setWebsite(e.target.value)}
              defaultValue={website}
              disabled={disable}
            />
          </label>
          <button
            className={`bg-zinc-500 p-1 text-white rounded ${
              fullName.length === 0 || disable
                ? "hover:cursor-not-allowed opacity-70"
                : "hover:cursor-pointer"
            }`}
            onClick={updateUserProfile}
            disabled={fullName.length === 0 || disable}
          >
            Update Profile
          </button>
        </div>
      </div>
    );
  }
}
