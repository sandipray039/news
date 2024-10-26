
import React from "react";

function Card({ title, description, image, url }) {
  return (
  <div className="card-contain">
      <div className="card" style={{ height: "auto", width: "18rem", margin: "1rem" }}>
      <img 
        src={image}
        className="card-img-top" 
        alt="loading" 
        style={{ height: "10rem", objectFit: "cover" }} 
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text" style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}>
          {description}
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  </div>
  );
}

export default Card;




