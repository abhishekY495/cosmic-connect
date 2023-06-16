import React from "react";
import { Link } from "react-router-dom";

export default function PrimarySidebar() {
  return (
    <div className="w-[220px] border-[1px] border-zinc-300 sticky top-0 h-screen flex flex-col">
      <Link className="flex gap-1">
        <p>Cosmic</p>
        <img
          src="https://img.icons8.com/?size=24&id=GiHNxwe2ZmsA&format=svg"
          alt="cosmic connect"
        />
      </Link>
      <Link to="/explore"># Explore</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}
