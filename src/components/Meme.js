import React from "react";
import { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme--image--container">
        <img src={meme.randomImage} className="meme--image" />
      </div>
    </main>
  );
}
