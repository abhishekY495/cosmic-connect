import React from "react";

export default function SecondarySidebar() {
  return (
    <div className="w-[220px] border-[1px] border-zinc-300 sticky top-0 h-screen">
      <input type="text" placeholder="Search Users..." className="border-[1px]"/>
      <ul className="">
        <li>neiltyson</li>
        <li>abhishekY495</li>
        <li>3tweetSauce</li>
        <li>musicalscience</li>
      </ul>
    </div>
  );
}
