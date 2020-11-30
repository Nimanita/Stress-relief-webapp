import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import Analysis from "../component/Analysis";
import Solution from "../component/Solution";

export default function App() {
  var po = 0;
  const [count, setpage] = useState(<Analysis />);
  function firstlinkclicked() {
    setpage(<Solution />);
  }
  function Secondlinkclicked() {
    setpage(<Analysis pogo={po} />);
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar heading">
        <a class="navbar-brand happy" href="#">
          Happy Living
        </a>

        <ul class="navbar-nav">
          <li class="nav-item  solution">
            <a class="nav-link" href="#" onClick={() => firstlinkclicked()}>
              Solution
            </a>
          </li>
          <li class="nav-item analysis">
            <a class="nav-link" href="#" onClick={() => Secondlinkclicked()}>
              Analysis
            </a>
          </li>
        </ul>
      </nav>
      {count}
    </div>
  );
}
