import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
    
        <h2 className="mt-4 ">Dashbored</h2>
        <hr />
        <ul className="dash-nav ">
          <li>
            <Link to="/Table">
              <h3>hi guyssss</h3>
            </Link>
          </li>
          <li>
            <a href="/">
              <h3>Posting</h3>
            </a>
          </li>
          <li>
            <a href="/">
              <h3>Pages</h3>
            </a>
          </li>
          <li>
            <a href="/">
              <h3>Pages</h3>
            </a>
          </li>

          <li>
            <a href="/">
              <h3>Pages</h3>
            </a>
          </li>

          <li>
            <a href="/">
              <h3>Pages</h3>
            </a>
          </li>
        </ul>
      </div>
   
  );
}
