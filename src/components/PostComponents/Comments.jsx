import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import verifiedIcon from "../../assets/profile/verified.svg";
import deleteIcon from "../../assets/posts/delete-icon.svg";
import CommentBox from "./CommentBox";
import { AuthContext } from "../../contexts/AuthContext";
import { PostsDataContext } from "../../contexts/PostsDataContext";

export default function Comments({ comments }) {
  const { postId } = useParams();
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(PostsDataContext);

  const deleteCommentHandler = (commentId) => {
    dispatch({ type: "DELETE_COMMENT", payload: { postId, commentId } });
    toast.success("Comment deleted");
  };

  const formatDate = (userDate) => {
    const date = new Date(userDate);
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );
    const day = date.getDate();
    return month + " " + day;
  };

  return (
    <>
      <br />
      <hr />
      <CommentBox />
      <hr />
      <br />
      <p className="font-semibold text-2xl">Comments</p>
      <br />
      <div className="flex flex-col gap-8 b-[1px] mb-40">
        {comments?.length === 0 ? (
          <p className="text-center">No Comments</p>
        ) : (
          comments
            ?.sort((a, b) => new Date(b.commentedAt) - new Date(a.commentedAt))
            ?.map((user) => {
              const {
                id,
                userName,
                avatar,
                fullName,
                verified,
                content,
                commentedAt,
              } = user;
              return (
                <div
                  key={id}
                  className="flex flex-col gap-1 border-b-[1px] pb-5"
                >
                  <div className="flex justify-between">
                    <Link to={`/${userName}`}>
                      <div className="flex items-center gap-1">
                        <img
                          src={avatar}
                          alt={fullName}
                          className="w-[30px] h-[30px] object-cover mr-[2px] rounded-full"
                        />
                        <div className="flex flex-col gap-[2px]">
                          <div className="flex items-center gap-1">
                            <p className="font-medium text-sm">{fullName}</p>
                            {verified && (
                              <img
                                src={verifiedIcon}
                                className="w-3"
                                alt="verified"
                              />
                            )}
                            <span>•</span>
                            <p className="font-light text-sm">
                              {formatDate(commentedAt)}
                            </p>
                          </div>
                          <p className="font-light text-xs -mt-1">
                            @{userName}
                          </p>
                        </div>
                      </div>
                    </Link>
                    {userName === currentUser.userName && (
                      <img
                        src={deleteIcon}
                        onClick={() => deleteCommentHandler(id)}
                        className="w-5 hover:cursor-pointer"
                        alt="trash"
                      />
                    )}
                  </div>
                  <div className="whitespace-pre-wrap">{content}</div>
                </div>
              );
            })
        )}
      </div>
    </>
  );
}
