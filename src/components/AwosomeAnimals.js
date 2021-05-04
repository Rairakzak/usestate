import React from "react";
import "../style/_AwosomeAnimals.css";
export default function AwosomeAnimals() {
  return (
    <div className="AwosomeAnimals">
      <p>Exercise: Interpolating arrays</p>
      <h1>AwosomeAnimals</h1>
      <ul>
        {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
          (animal, index) => {
            return (
              <li key={index}>
                Awosome level {index + 1}:{animal}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
