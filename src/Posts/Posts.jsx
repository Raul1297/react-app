import React from "react";
import PostItem from "../components/PostItem/PostItem";
import "./Posts.css";

export default function Posts() {
  const posts = [
    {
      image:
        "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Question about the new landscape",
      user: "theindependentonline",
      subreddit: "landscape",
      comment_count: 1424,
    },
    {
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "New car in town",
      user: "theuserone",
      subreddit: "cars",
      comment_count: 1234,
    },
    {
      upvote: 456,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "You need to try it",
      user: "thefoodmaker",
      subreddit: "food",
      comment_count: 6789,
    },
    {
      image:
        "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Some new books in tows",
      user: "thebestbooks",
      subreddit: "books",
      comment_count: 4987,
    },
    {
      image:
        "https://images.unsplash.com/photo-1474546652694-a33dd8161d66?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Try to reach the finish line",
      user: "therunner",
      subreddit: "sport",
      comment_count: 123421,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      title: "Also the dogs can read articles",
      user: "thedoglover",
      subreddit: "dogs",
      comment_count: 11678,
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}
