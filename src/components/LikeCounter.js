// src/components/LikeCounter.js
import { useState } from "react"; // <- note the added import of useState
import "../style/_LikeCounter.css";

import { AiFillHeart } from "react-icons/ai";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
  };
  const counterPlus = (numLikes) => {
    return (numLikes += 1);
  };
  const counterMinus = (numLikes) => {
    return numLikes > 0 ? (numLikes -= 1) : (numLikes = 0);
  };
  const reset = (numLikes) => {
    return (numLikes = initial_numLikes);
  };

  return (
    <div className="counter">
      <p>Exercise: Updating state</p>
      <h1>Counter + Like </h1>
      <p>
        Number of items <b>{numLikes}</b>
      </p>
      <button onClick={() => set_numLikes(counterPlus)}>Counter +</button>
      <button onClick={() => set_numLikes(counterMinus)}>Counter -</button>
      <button onClick={() => set_numLikes(reset)}>Counter reset</button>
      <div className="heartIcon">
        <AiFillHeart
          onClick={toggle}
          className={liked ? "like_active" : "like"}
        />
        {liked ? "liked" : "Like this"}
      </div>
    </div>
  );
}
