import React from "react";
import { Link } from "react-router-dom";

import verifiedIcon from "../../assets/profile/verified.svg";

export default function Comments({ comments }) {
  return (
    <>
      <br />
      <hr />
      <br />
      <p className="font-semibold text-2xl">Comments</p>
      <br />
      <div className="flex flex-col gap-8 b-[1px] mb-40">
        {comments?.length === 0 ? (
          <p className="text-center">No Comments</p>
        ) : (
          comments?.map((user) => {
            const { id, userName, avatar, fullName, verified, content } = user;
            return (
              <div key={id} className="flex flex-col gap-1 border-b-[1px] pb-5">
                <Link to={`/${userName}`}>
                  <div className="flex items-center gap-1">
                    <img
                      src={avatar}
                      alt={fullName}
                      className="w-[30px] mr-[2px]"
                    />
                    <div className="flex flex-col gap-[2px]">
                      <div className="flex items-center gap-1">
                        <p className="font-medium text-sm">{fullName}</p>
                        <div className="flex gap-1 items-center">
                          {verified && (
                            <img
                              src={verifiedIcon}
                              className="w-3"
                              alt="verified"
                            />
                          )}
                        </div>
                      </div>
                      <p className="font-light text-xs -mt-1">{userName}</p>
                    </div>
                  </div>
                </Link>
                <div>{content}</div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
