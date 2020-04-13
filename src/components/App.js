import React from "react";
import "./App.css";

import Stories from "./Stories";

const App = ({ stories, onArchive }) => {
  return (
    <div className="ap">
      <Stories stories={stories} onArchive={onArchive} />
    </div>
  );
};

export default App;
