import React, { useState } from "react";
import { useAudio } from "react-use";
import useSound from "use-sound";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export default function Solution1(props) {
  const [audio, state, controls, ref] = useAudio({
    src: "song.mp3",
    autoPlay: true
  });

  const [dietmessage, changedietmessage] = useState(
    "It's really great that you are a Vegetarian!!"
  );
  const [sleepmessage, changesleepmessage] = useState("You take good rest.");
  const [exercisemessage, changeexercisemessage] = useState(
    "Wow!! You do physical workout"
  );
  const [meditationmessage, changemeditationmessage] = useState(
    "You must try our ways to do meditation."
  );

  function changedietsleepexercise() {
    console.log(props.diet);
    if (props.diet === "NonVegetarian") {
      changedietmessage(
        "You should try to avoid NonVeg food as much as you can"
      );
    }
    if (props.exercise === "no") {
      changeexercisemessage("You should do some physical workout");
    }
    if (props.sleeptime === "before10pm" && props.sleephour === "less6") {
      changesleepmessage(
        "It's really good that you sleep before 10pm but please sleep for 6-8 hours"
      );
    } else if (props.sleeptime === "After10pm") {
      changesleepmessage(
        "Please try to sleep before 10pm  and sleep for 6-8 hours"
      );
    }
  }

  return (
    <div class="solution1" onMouseOver={() => changedietsleepexercise()}>
      {audio}
      <h3 class="solution1header">
        Hello {props.namep} !! Here is your Solution.{" "}
      </h3>
      <h2 class="solution2header">Follow it and be Strees Free </h2>
      <h3 class="topic">Body</h3>
      <h3 class="message">{dietmessage}</h3>
      <p class="info">
        There is an expression, “You are what you eat.” people recognize that
        whatever they eat forms a part of their body and also influences their
        thoughts <br />
        Those who eat meat are ingesting not only the flesh, but all the
        hormones of stress that are released due to the animal’s fear as well
      </p>
      <h3 class="message">{exercisemessage}</h3>
      <p class="info">
        Exercise increases the oxygen content of our body , makes us feel fresh
        and reduces our stress{" "}
      </p>
      <h3 class="message">{sleepmessage}</h3>
      <p class="info">
        Sleep is a powerful stress reducer. Following a regular sleep routine
        calms and restores the body, improves concentration, regulates mood, and
        sharpens judgment and decision-making. You are a better problem solver
        and are better able to cope with stress when you're well-rested.
      </p>
      <h2 class="topic">Mind</h2>
      <p class="info">
        The music which is playing at the background is the holy name which can
        help you to relieve stress.{" "}
      </p>
      <h3>Are you curious how we came to this solution? than read below..</h3>
      <p class="info">
        {" "}
        This time we ourself created a dataset ,we searched over all the method
        that was used to reduce the stress in the last 80 years{" "}
      </p>
      <p class="info">
        There were many methods like listening music,dancing .....till
        meditating on himalayas but nothing worked during certain cases and
        mostly were not practical to follow
      </p>
      <p class="maininfo">
        In 1968,A hare krishna movement was started by A.C Bhaktivedanta Swami
        Prabhupad which spread this holyname throughout the world and its
        results were amazing.It changed many people from hippies to happies
      </p>
      <p class="maininfo">
        There are many scientific research on this holy name,So you should
        chant,hear and meditate on it for atleast 15mins{" "}
      </p>
      <p class="topic">
        Here is the image of holyname.You can play the audio also.
      </p>
      <button
        type="button solution-btn"
        class="btn btn-primary music"
        onClick={controls.pause}
      >
        Pause
      </button>
      <button
        type="button solution-btn"
        class="btn btn-success music"
        onClick={controls.play}
      >
        Play
      </button>
      <div class="image1">
        <img class="image" src="./holy.jpg" />
      </div>
    </div>
  );
}
