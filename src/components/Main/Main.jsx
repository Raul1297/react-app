import React from "react";
import Header from "../Header/Header";
import "./Main.css";
import Posts from "../../Posts/Posts";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Posts />
    </div>
  );
}
