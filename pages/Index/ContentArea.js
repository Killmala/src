// src/pages/Index/ContentArea.js
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ContentArea.css";

const getClassNameForContentType = (contentType) => {
  // Map content types to specific styling classes
  switch (contentType) {
    case "Videos":
      return "content-area--videos";
    case "Images":
      return "content-area--images";
    case "Reading":
      return "content-area--reading";
    case "People":
      return "content-area--people";
    case "All":
    default:
      return "content-area--all";
  }
};

const ContentCard = ({ item }) => {
  switch (item.type) {
    case "Videos":
      return (
        <div className="content-card content-card--video">
          <video controls>
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>{item.title}</p>
        </div>
      );
    case "Images":
      return (
        <div className="content-card content-card--image">
          <img src={item.src} alt={item.title} />
          <p>{item.title}</p>
        </div>
      );
    case "Reading":
      return (
        <div className="content-card content-card--reading">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      );
    case "People":
      return (
        <div className="content-card content-card--people">
          <h3>{item.name}</h3>
          <p>{item.bio}</p>
        </div>
      );
    default:
      return null;
  }
};

ContentCard.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string,
    src: PropTypes.string,
    content: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

const ContentArea = ({ contentType }) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/content")
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  // Filter content based on contentType
  const filteredContent =
    contentType === "All"
      ? content
      : content.filter((item) => item.type === contentType);

  const className = `content-area ${getClassNameForContentType(contentType)}`;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading content: {error.message}</p>;
  }

  return (
    <div className={className}>
      <h2>{contentType} Content</h2>
      {filteredContent.length > 0 ? (
        <div className="content-list">
          {filteredContent.map((item, index) => (
            <ContentCard key={index} item={item} />
          ))}
        </div>
      ) : (
        <p className="no-content">
          No {contentType.toLowerCase()} content available.
        </p>
      )}
    </div>
  );
};

ContentArea.propTypes = {
  contentType: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

ContentArea.defaultProps = {
  contentType: "All",
  content: [],
};

export default ContentArea;
