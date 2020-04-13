import React from "react";

const StoriesHeader = ({ columns }) => {
  return (
    <div className="stories-header">
      {Object.keys(COLUMNS).map((key) => (
        <span key={key} style={{ width: COLUMNS[key].width }}>
          {COLUMNS[key].label}
        </span>
      ))}
    </div>
  );
};

export default StoriesHeader;
