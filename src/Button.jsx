import React from "react";

const Button = ({ content, icon, onClick }) => {
  return (
    <>
      <button onClick={onClick}>
        <span role="img" aria-label={icon}>
          {icon}
        </span>
        {content}
      </button>
    </>
  );
};

export default Button;
