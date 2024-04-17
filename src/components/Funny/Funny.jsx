import { useState } from "react";
import "./Funny.css";

export default function Funny() {
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
  const [like3, setLike3] = useState(false);

  const handleLikes3 = () => {
    if (!like3) {
      setLike3(true);
    } else {
      setLike3(false);
    }
  };

  return (
    <div className="funny">
      <div className="funny-container">
        <img
          src="https://picsum.photos/id/990/300/300"
          alt=""
          className="card-img"
        />
        <h1 className="funny-title">Sea</h1>
        <p className="funny-description">A beautiful sunset</p>
        <button href="" className="like-button">
          {like1 ? (
            <i
              class="fa-solid fa-heart fa-xl"
              onClick={handleLikes1}
              style={{ cursor: "pointer", color: "red" }}
            ></i>
          ) : (
            <i
              class="fa-regular fa-heart fa-xl"
              onClick={handleLikes1}
              style={{ cursor: "pointer" }}
            ></i>
          )}
        </button>
      </div>

      <div className="funny-container">
        <img src="https://picsum.photos/300/300" alt="" className="card-img" />
        <h1 className="funny-title">Random</h1>
        <p className="funny-description">All kind of images</p>
        <button href="" className="like-button">
          {like2 ? (
            <i
              class="fa-solid fa-heart fa-xl"
              onClick={handleLikes2}
              style={{ cursor: "pointer", color: "red" }}
            ></i>
          ) : (
            <i
              class="fa-regular fa-heart fa-xl"
              onClick={handleLikes2}
              style={{ cursor: "pointer" }}
            ></i>
          )}
        </button>
      </div>
      <div className="funny-container">
        <img
          src="https://picsum.photos/id/324/300/300"
          alt=""
          className="card-img"
        />
        <h1 className="funny-title">Forest</h1>
        <p className="funny-description">The beautiful forest</p>
        <button href="" className="like-button">
          {like3 ? (
            <i
              class="fa-solid fa-heart fa-xl"
              onClick={handleLikes3}
              style={{ cursor: "pointer", color: "red" }}
            ></i>
          ) : (
            <i
              class="fa-regular fa-heart fa-xl"
              onClick={handleLikes3}
              style={{ cursor: "pointer" }}
            ></i>
          )}
        </button>
      </div>
    </div>
  );
}
