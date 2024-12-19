import React from "react";
import { useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const error = useRouteError(); // Retrieve the error object
  console.error(error); // Log the error for debugging purposes

  return (
    <div className="error-container">
      <h1>Oops! Something went wrong.</h1>
      <p>{error.statusText || "An unexpected error occurred."}</p>
      {error.status && <p>Status Code: {error.status}</p>}
      {error.data && <pre>{JSON.stringify(error.data, null, 2)}</pre>}
      <a href="/" className="error-link">
        Go Back to Home
      </a>
    </div>
  );
};

export default Error;
