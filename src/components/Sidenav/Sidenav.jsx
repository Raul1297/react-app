import React, { useEffect, useState } from "react";
import "./Sidenav.css";
import { Link } from "react-router-dom";
export default function Sidenav() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setFilterData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (value) => {
    const res = filterData.filter((f) => f.name.toLowerCase().includes(value));
    setData(res);
    if (value === "") {
      setData([]);
    }
  };

  return (
    <div className="sidenav">
      <div className="sidenav-logo">
        <img
          src="https://logowik.com/content/uploads/images/reddit4236.logowik.com.webp"
          alt=""
        />
      </div>
      <div className="sidenav-search">
        <input
          type="text"
          name="search"
          placeholder="Search Users..."
          onChange={(e) => handleFilter(e.target.value)}
        />
      </div>
      <div className="search-result">
        {data.map((d, i) => (
          <div key={i}>{d.name}</div>
        ))}
      </div>
      <div className="sidenav-link">
        <Link className="buttons-first" to="https://www.biography.com/athletes">
          <i class="fa-solid fa-fan"></i> Popular Athletes
        </Link>
        <hr />
        <Link className="buttons-first" to="/crazy">
          <i class="fa-solid fa-arrow-trend-up"></i> Crazy
        </Link>
        <hr />
        <Link className="buttons-first" to="/random">
          <i class="fa-solid fa-fan"></i> Random
        </Link>
        <hr />
        <Link
          className="buttons"
          to="https://www.youtube.com/watch?v=ooaIo4_TNdE"
        >
          <i class="fa-solid fa-face-smile"></i> Stand-up
        </Link>
        <hr />
        <Link className="buttons" to="https://www.twitch.tv" target="_blank">
          <i class="fa-solid fa-gamepad"></i> Gaming
        </Link>
        <hr />
        <Link className="buttons" to="https://tiktok.com" target="_blank">
          <i class="fa-solid fa-video"></i> Videos
        </Link>
        <hr />
        <Link className="buttons" to="/funny">
          <i class="fa-solid fa-candy-cane"></i> Funny
        </Link>
        <hr />
        <Link
          className="buttons"
          to="https://www.skysports.com"
          target="_blank"
        >
          <i class="fa-solid fa-medal"></i> Sport
        </Link>
        <hr />
        <Link
          className="buttons-last"
          to="https://facebook.com"
          target="_blank"
        >
          <i class="fa-brands fa-facebook"></i> Facebook
        </Link>
        <hr />
        <Link
          className="buttons-last"
          to="https://instagram.com"
          target="_blank"
        >
          <i class="fa-brands fa-instagram"></i> Instagram
        </Link>
        <hr />
        <Link
          className="buttons-last"
          to="https://www.youtube.com"
          target="_blank"
        >
          <i class="fa-brands fa-youtube"></i> Youtube
        </Link>
        <hr />
        <footer className="footer">@copyright Reddit 2024</footer>
      </div>
    </div>
  );
}
