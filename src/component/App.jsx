import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import Analysis from "../component/Analysis";
import Solution from "../component/Solution";
import Solution1 from "../component/Solution1";
import Footer from "../component/Footer";
import Wait from "../component/Wait";
export default function App(props) {
  console.log("1dbdb");
  const [count, setpage] = useState(<Analysis />);
  const [name1, setname] = useState("opop ");
  const [data1, setdata1] = useState({
    name: "pop ",
    meditation: " ",
    diet: " ",
    sleeptime: " ",
    sleephour: " ",
    exercise: " "
  });
  function handleChange(value) {
    setdata1({
      name: value.namep,
      meditation: value.meditation,
      diet: value.diet,
      sleeptime: value.sleeptime,
      sleephour: value.sleephour,
      exercise: value.exercise
    });
    setpage(() => (
      <Solution1
        namep={value.namep}
        meditation={value.meditation}
        diet={value.diet}
        sleeptime={value.sleeptime}
        sleephour={value.sleephour}
        exercise={value.exercise}
      />
    ));
    //Fourthlinkclicked();
  }
  function handle() {
    Thirdlinkclicked();
  }
  /*function Fourthlinkclicked() {
    setpage(<Wait onChange={handle} />);
  }*/
  function firstlinkclicked() {
    setpage(<Solution value={data1} onChange={handleChange} />);
  }
  function Secondlinkclicked() {
    console.log(data1);
    setpage(<Analysis />);
  }
  /*function Thirdlinkclicked() {
    setpage(<Solution1 namep={data1.name} />);
  }*/

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar heading">
        <a class="navbar-brand happy">Happy Living</a>

        <ul class="navbar-nav">
          <li class="nav-item  solution">
            <a class="nav-link" onClick={() => firstlinkclicked()}>
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
      <Footer />
    </div>
  );
}
