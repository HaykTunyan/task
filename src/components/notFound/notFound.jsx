import React from "react";

const NotFound = ({ staticContext = {} }) => {
  staticContext.status = 404;
  return (
    <div className="not-found">
      <h1> Noting Page </h1>
    </div>
  );
};

export default NotFound;
