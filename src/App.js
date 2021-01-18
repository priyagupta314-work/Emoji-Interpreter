import React, { useState } from "react";
import "./styles.css";

var userName = "Priya";
var color = "blue";
var emojiDict = {
  "🍇": "Grapes",
  "🍋": "Lemon",
  "🥝": "Kiwi",
  "🥭": "Mango",
  "🍍": "Pine-apple",
  "🧊": "Ice",
  "🥢": "Chopsticks",
  "🍽️": "Fork and Knife with Plate",
  "🍴": "Fork and Knife",
  "🥄": "Spoon",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍬": "Candy"
};
var emojisWeKnow = Object.keys(emojiDict);
console.log(emojisWeKnow);
//var likeCounter = 0;
export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler() {
    var userEmoji = event.target.value;
    var meaning = emojiDict[userEmoji];

    if (meaning === undefined) {
      meaning = "Not found in the database";
    }
    setMeaning(meaning);
    console.log(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        Welcome <span style={{ backgroundColor: color }}>{userName} </span>
      </h1>
      <input onChange={inputChangeHandler} />
      <h2> {meaning} </h2>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            id="emo"
            onClick={() => emojiClickHandler(emoji)}
            style={{
              padding: "0.5rem",
              fontSize: "2rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
