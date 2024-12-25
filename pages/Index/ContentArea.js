// src/pages/Index/ContentArea.js
import React from "react";
import PropTypes from "prop-types";
import "./ContentArea.css";
import ContentCard from "./ContentCard";

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

const ContentArea = ({ contentType, content }) => {
  // Filter content based on contentType
  const filteredContent =
    contentType === "All"
      ? content
      : content.filter((item) => item.type === contentType);

  const className = `content-area ${getClassNameForContentType(contentType)}`;

  return (
    <div className={className}>
      <h2>{contentType} Content</h2>
      {filteredContent.length > 0 ? (
        <ul className="content-list">
          {filteredContent.map((item, index) => (
            <li key={index} className="content-item">
              <ContentCard title={item.title} />
            </li>
          ))}
        </ul>
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
