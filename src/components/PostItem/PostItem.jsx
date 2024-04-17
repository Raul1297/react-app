import React, { useState } from "react";
import "./PostItem.css";

export default function PostItem(props) {
  const { title, image, user, subreddit, comment_count } = props.post;
  const [like1, setLike1] = useState(false);

  const handleLikes1 = () => {
    if (!like1) {
      setLike1(true);
    } else {
      setLike1(false);
    }
  };
  const [like2, setLike2] = useState(false);

  const handleLikes2 = () => {
    if (!like2) {
      setLike2(true);
    } else {
      setLike2(false);
    }
  };
  return (
    <div className="post">
      <div className="post-left">
        <button href="" className="like-button-item">
          {like1 ? (
            <i
              class="fa-solid fa-thumbs-up"
              onClick={handleLikes1}
              style={{ cursor: "pointer", color: "#7ddf64" }}
            ></i>
          ) : (
            <i
              class="fa-solid fa-thumbs-up"
              onClick={handleLikes1}
              style={{ cursor: "pointer" }}
            ></i>
          )}
        </button>
        <i></i>

        <button href="" className="like-button-item">
          {like2 ? (
            <i
              class="fa-solid fa-thumbs-down "
              onClick={handleLikes2}
              style={{ cursor: "pointer", color: "#24A0ED" }}
            ></i>
          ) : (
            <i
              class="fa-solid fa-thumbs-down"
              onClick={handleLikes2}
              style={{ cursor: "pointer" }}
            ></i>
          )}
        </button>
        <i></i>
      </div>
      <div className="post-center">
        <img src={image} alt="" />
      </div>
      <div className="post-right">
        <h3>
          <a href={`/r/${subreddit}/{title}`}>{title}</a>
        </h3>
        <span className="post-info">
          submitted an hour ago by {""}
          <a href={`/u/${user}`}>{user}</a> to
          <a href={`/r${subreddit}`}> {subreddit}</a>
        </span>
        <p className="post-info">
          {comment_count} comments|share|save|hide|report
        </p>
      </div>
    </div>
  );
}
