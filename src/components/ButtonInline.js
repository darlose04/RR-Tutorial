import React from "react";

const ButtonInline = ({ onClick, type = "button", children }) => {
  return (
    <button className="button-inline" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonInline;
