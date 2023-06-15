import React from "react";
import { Link } from "react-router-dom";

export default function PrimarySidebar() {
  return (
    <div className="w-[100px]">
      <Link className="flex gap-1 fixed">
        <p>Cosmic</p>
        <img
          src="https://img.icons8.com/?size=24&id=GiHNxwe2ZmsA&format=svg"
          alt="cosmic connect"
        />
      </Link>
    </div>
  );
}
