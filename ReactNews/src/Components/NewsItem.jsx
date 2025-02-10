import React from "react";
import image from "../assets/news.avif";
import "./newsItem.css";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 news-card"
      style={{ maxWidth: "280px" }}
    >
      <img
        src={src ? src : image}
        onError={(e) => (e.target.src = image)} // Fallback image
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
          }}
        >
          {title || "Default Title"}
        </h5>
        <p
          className="card-text"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 3,
          }}
        >
          {description ||
            "News is about current events. It is information about something that has just happened."}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
