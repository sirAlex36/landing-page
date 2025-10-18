import React from "react";

const Footer = () => {
  
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">
          © {new Date().getFullYear()} <span className="fw-bold text-primary">Alex</span>. All rights reserved.
        </p>
        <p className="small mb-0">
          Built with <span className="text-danger">❤</span> using React & Bootstrap.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
