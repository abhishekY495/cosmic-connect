import React, { useContext, useState } from "react";

import { UsersDataContext } from "../contexts/UsersDataContext";
import { AuthContext } from "../contexts/AuthContext";
import crossIcon from "../assets/profile/cross-icon.svg";

export default function EditProfileModal({ open, onClose, userProfile }) {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(UsersDataContext);
  const [fullName, setFullName] = useState(
    userProfile && userProfile?.fullName
  );
  const [avatar, setAvatar] = useState(userProfile && userProfile?.avatar);
  const [bio, setBio] = useState(userProfile && userProfile?.bio);
  const [website, setWebsite] = useState(userProfile && userProfile?.website);
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
    const updatedUserProfile = {
      ...currentUser,
      fullName,
      bio,
      avatar,
      website,
    };
    dispatch({
      type: "UPDATE_USER_PROFILE",
      payload: { updatedUserProfile, currentUser },
    });
    closeModal();
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
          className="bg-white flex flex-col gap-3 w-[320px] m-auto p-5 mt-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={crossIcon}
            className="w-6 bg-slate-200 p-1 absolute right-3 top-3 rounded-full hover:cursor-pointer"
            alt="cross"
            onClick={closeModal}
          />
          <img
            src={avatar}
            className="w-[50%] h-[160px] object-cover m-auto rounded-full"
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
            />
          </label>
          <label>
            Full Name
            <input
              className="border w-full pl-1"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              defaultValue={fullName}
            />
          </label>
          <label>
            Bio
            <textarea
              className="border w-full pl-1"
              cols="30"
              onChange={(e) => setBio(e.target.value)}
              defaultValue={bio}
              maxLength={40}
            ></textarea>
          </label>
          <label>
            Website
            <input
              className="border w-full pl-1"
              type="text"
              onChange={(e) => setWebsite(e.target.value)}
              defaultValue={website}
            />
          </label>
          <button
            className="bg-zinc-500 p-1 text-white rounded"
            onClick={updateUserProfile}
          >
            Update Profile
          </button>
        </div>
      </div>
    );
  }
}
