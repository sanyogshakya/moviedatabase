import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="section-center">
      <h1 className="title">Oops!! It's a dead end</h1>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
