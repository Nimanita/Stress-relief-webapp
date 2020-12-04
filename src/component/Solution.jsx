import React, { useState } from "react";
import useSound from "use-sound";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export default function Solution(props) {
  // const [play] = useSound("song1.mp3");
  //console.log(props.data.name);
  const [data, setdata] = useState({
    namep: "",
    meditation: " ",
    diet: " ",
    sleeptime: " ",
    sleephour: " ",
    exercise: " "
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setdata((prevValue) => {
      if (name === "namep") {
        return {
          namep: value,
          meditation: prevValue.meditation,
          diet: prevValue.diet,
          sleeptime: prevValue.sleeptime,
          sleephour: prevValue.sleephour,
          exercise: prevValue.exercise
        };
      } else if (name === "meditation") {
        return {
          namep: prevValue.namep,
          meditation: value,
          diet: prevValue.diet,
          sleeptime: prevValue.sleeptime,
          sleephour: prevValue.sleephour,
          exercise: prevValue.exercise
        };
      } else if (name === "diet") {
        return {
          namep: prevValue.namep,
          meditation: prevValue.meditation,
          diet: value,
          sleeptime: prevValue.sleeptime,
          sleephour: prevValue.sleephour,
          exercise: prevValue.exercise
        };
      } else if (name === "sleeptime") {
        return {
          namep: prevValue.namep,
          meditation: prevValue.meditation,
          diet: prevValue.diet,
          sleeptime: value,
          sleephour: prevValue.sleephour,
          exercise: prevValue.exercise
        };
      } else if (name === "sleephour") {
        return {
          namep: prevValue.namep,
          meditation: prevValue.meditation,
          diet: prevValue.diet,
          sleeptime: prevValue.sleeptime,
          sleephour: value,
          exercise: prevValue.exercise
        };
      } else if (name === "exercise") {
        return {
          namep: prevValue.namep,
          meditation: prevValue.meditation,
          diet: prevValue.diet,
          sleeptime: prevValue.sleeptime,
          sleephour: prevValue.sleephour,
          exercise: value
        };
      }
    });
  }

  function onsubmit(event) {
    props.onChange(data);
  }
  return (
    <form class="solution-form" onSubmit={() => onsubmit()}>
      <h3 class="solution-header">Please write your name</h3>
      <input
        type="text"
        class="form-control-name"
        onChange={handleChange}
        name="namep"
        value={data.namep}
      />
      <h3 class="solution-header">How frequently you meditate?</h3>
      <input
        type="checkbox"
        class="solution-checkbox"
        aria-label="Checkbox for following text input"
        name="meditation"
        value="Never"
        onChange={handleChange}
      />
      <label class="form-check-label-solution">Never</label>
      <input
        type="checkbox"
        class="solution-checkbox"
        aria-label="Checkbox for following text input"
        name="meditation"
        value="Rarely"
        onChange={handleChange}
      />
      <label class="form-check-label-solution">Rarely</label>
      <input
        type="checkbox"
        class="solution-checkbox"
        aria-label="Checkbox for following text input"
        name="meditation"
        value="Sometimes"
        onChange={handleChange}
      />
      <label class="form-check-label-solution">Sometimes</label>
      <input
        type="checkbox"
        class="solution-checkbox"
        aria-label="Checkbox for following text input"
        name="meditation"
        value="Often"
        onChange={handleChange}
      />
      <label class="form-check-label-solution">Often</label>
      <input
        type="checkbox"
        class="solution-checkbox"
        aria-label="Checkbox for following text input"
        name="meditation"
        value="Always"
        onChange={handleChange}
      />
      <label class="form-check-label-solution">Always</label>

      <h3 class="solution-header">Are you ?</h3>
      <input
        type="radio"
        class="solution-checkbox-diet"
        aria-label="Checkbox for following text input"
        name="diet"
        value="Vegetarian"
        onChange={handleChange}
      />
      <label class="form-check-label-solution diet">Vegetarian</label>
      <input
        type="radio"
        class="solution-checkbox-diet"
        aria-label="Checkbox for following text input"
        name="diet"
        value="NonVegetarian"
        onChange={handleChange}
      />
      <label class="form-check-label-solution diet">Non Vegetarian</label>

      <h3 class="solution-header">When you sleep ?</h3>
      <input
        type="checkbox"
        class="solution-checkbox "
        aria-label="Checkbox for following text input"
        name="sleeptime"
        value="before10pm"
        onChange={handleChange}
      />
      <label class="form-check-label-solution">Before 10pm</label>
      <input
        type="checkbox"
        class="solution-checkbox"
        aria-label="Checkbox for following text input"
        name="sleeptime"
        value="After10pm"
        onChange={handleChange}
      />
      <label class="form-check-label-solution">After 10pm</label>
      <h3 class="solution-header">How much hours do you sleep</h3>
      <input
        type="radio"
        class="solution-checkbox-diet"
        aria-label="Checkbox for following text input"
        name="sleephour"
        value="more6"
        onChange={handleChange}
      />
      <label class="form-check-label-solution diet">More than 6 hours</label>
      <input
        type="radio"
        class="solution-checkbox-diet"
        aria-label="Checkbox for following text input"
        name="sleephour"
        value="less6"
        onChange={handleChange}
      />
      <label class="form-check-label-solution diet">Less than 6 hours</label>

      <h3 class="solution-header">Do you do exercise ?</h3>
      <input
        type="checkbox"
        class="solution-checkbox"
        aria-label="Checkbox for following text input"
        name="exercise"
        value="yes"
        onChange={handleChange}
      />
      <label class="form-check-label-solution">Yes</label>
      <input
        type="checkbox"
        class="solution-checkbox"
        aria-label="Checkbox for following text input"
        name="exercise"
        value="no"
        onChange={handleChange}
      />
      <label class="form-check-label-solution">No</label>
      <div class="solution-button">
        <button
          type="button solution-btn"
          class="btn btn-primary submit-btn"
          //onClick={play}
        >
          OK
        </button>
      </div>
    </form>
  );
}
