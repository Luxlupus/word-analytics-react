import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import { FACEBOOK_MAX, INSTAGRAM_MAX } from "./constants";

export default function Container() {
  const [text, setText] = useState("");
  //deriving from state
  //calculating the number of words spliting the text by space, checking and removing for empty string, calc the final length of array of words
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const numberOfChar = text.length;
  const instaCharLeft = INSTAGRAM_MAX - numberOfChar;
  const facebookCharLeft = FACEBOOK_MAX - numberOfChar;

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats
        numberOfChar={numberOfChar}
        facebookCharLeft={facebookCharLeft}
        instaCharLeft={instaCharLeft}
        numberOfWords={numberOfWords}
      />
    </main>
  );
}
