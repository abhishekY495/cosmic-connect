import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import { AuthContext } from "../contexts/AuthContext";
import PrimarySidebar from "../components/Sidebars/PrimarySidebar";
import SecondarySidebar from "../components/Sidebars/SecondarySidebar";
import { UsersDataContext } from "../contexts/UsersDataContext";
import { PostsDataContext } from "../contexts/PostsDataContext";
import PostsListing from "../components/PostsListing";

export default function Profile() {
  const { currentUser, logoutUser } = useContext(AuthContext);
  const {
    state: { postsData },
    dispatch,
  } = useContext(PostsDataContext);
  const { usersData } = useContext(UsersDataContext);
  const { username } = useParams();
  const navigate = useNavigate();

  const user = usersData.find((user) => user.userName === username);
  const userPosts = postsData.filter((post) => post.userName === username);

  const logoutBtnHandler = () => {
    logoutUser();
    navigate("/login");
    toast.success("Logged Out");
  };

  useEffect(() => {
    dispatch({ type: "FILTER_BY_CREATED_AT" });
  }, []);

  return (
    <div className="flex justify-center gap-10">
      <PrimarySidebar />
      <div className="">
        {!user ? (
          <p className="font-medium text-center w-[500px]">Use profile not found.</p>
        ) : (
          <>
            <div className="pb-2 sticky top-0 bg-slate-400 z-[1]">
              <p>
                <span className="font-medium">Name:</span>
                {user.fullName}
              </p>
              <p>
                <span className="font-medium">Username:</span>
                {user.userName}
              </p>
              <p>
                <span className="font-medium">Email:</span>
                {user.email}
              </p>
              <div className="flex gap-4">
                <p>
                  <b>{user.followers.length}</b>Followers
                </p>
                <p>
                  <b>{user.following.length}</b>Following
                </p>
              </div>
              {currentUser.userName === user.userName && (
                <button
                  className="bg-red-400 p-1 px-5 rounded my-2"
                  onClick={logoutBtnHandler}
                >
                  Logout
                </button>
              )}
            </div>
            <div>
              <PostsListing postsData={userPosts} usersPost />
            </div>
          </>
        )}
      </div>
      <SecondarySidebar />
    </div>
  );
}
