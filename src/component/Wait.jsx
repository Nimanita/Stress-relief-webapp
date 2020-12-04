import React, { useState } from "react";
import useSound from "use-sound";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export default function Wait(props) {
  // const [play] = useSound("song1.mp3");
  //console.log(props.data.name);
  function onsubmit(event) {
    console.log("ok");
    props.onChange();
  }
  return (
    <div class="solution-button">
      <button
        type="button solution-btn"
        class="btn btn-primary submit-btn"
        onClick={() => onsubmit()}
      >
        OK
      </button>
    </div>
  );
}
