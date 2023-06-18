import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function PrimarySidebar() {
  const { currentUser } = useContext(AuthContext);

  return (
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
      <Link to={`/${currentUser.userName}`}>Profile</Link>
    </aside>
  );
}
