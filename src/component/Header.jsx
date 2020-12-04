import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar heading">
      <a class="navbar-brand happy">Happy Living</a>

      <ul class="navbar-nav">
        <li class="nav-item active solution">
          <a class="nav-link">Solution </a>
        </li>
        <li class="nav-item analysis">
          <a class="nav-link">Analysis</a>
        </li>
      </ul>
    </nav>
  );
}
