import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import PostFormModal from "../PostFormModal";

export default function PrimarySidebar() {
  const { currentUser } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <PostFormModal open={openModal} onClose={() => setOpenModal(false)} />
      <aside className="w-[220px] border-[1px] border-zinc-300 sticky top-0 h-screen flex flex-col gap-4 text-end">
        <Link to="/home">
          <div className="flex gap-1 justify-end">
            <p>Cosmic</p>
            <img
              src="https://img.icons8.com/?size=24&id=GiHNxwe2ZmsA&format=svg"
              alt="cosmic connect"
            />
          </div>
        </Link>
        <Link to="/explore"># Explore</Link>
        <div
          className="hover:cursor-pointer"
          onClick={() => setOpenModal(true)}
        >
          New Post
        </div>
        <Link to={`/${currentUser.userName}`}>Profile</Link>
      </aside>
    </>
  );
}
