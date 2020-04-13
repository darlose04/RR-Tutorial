import React from "react";
import "./App.css";

import Stories from "./Stories";

const App = ({ stories }) => {
  return (
    <div className="ap">
      <Stories stories={stories} />
    </div>
  );
};

export default App;
