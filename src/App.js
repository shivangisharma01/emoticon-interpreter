import react, { useState } from "react";
import "./styles.css";

var headingText = " Emoticon Interpreter ";
var color = "purple";
var emojiDictionary = {
  "💕": "Revolving Hearts",
  "✨": "Sparkels",
  "😊": "Smilling",
  "😎": " Smilling with Sunglasses",
  "😂": "laughing",
  "😕": "Confused Face",
  "💀": "Skull",
  "🗼": "Tokyo Tower",
  "🗽": "Statue of Liberty",
  "🏯": "Japanese Castle",
  "🗿": "Moai",
  "🌋": "Volcano",
  "🗻": " Mount Fuji"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: color }}> {headingText}</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>

      <h3> Emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
          onClick={() => emojiClickHandler(emoji)}
          key={emoji}
          class="inlineEmoji" >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
