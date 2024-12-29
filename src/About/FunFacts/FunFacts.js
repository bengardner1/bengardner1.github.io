import React from "react";
import FunFactCard from "./FunFactCard";
import TimeSinceDob from "./TimeSinceDob";

function FunFactSection() {
  const facts = [
    { question: "Hometown", answer: <a href="https://maps.app.goo.gl/6Nazwbko6PWpQ9eK9" target="_blank" className="bg-link">West Hartford, CT</a> },
    { question: "Favorite Color", answer: "Green" },
    { question: "Dream Travel Destination", answer: "New Zealand (partially bc of Lord of the Rings)  " },
    { question: "Favorite Food", answer: "Korean"},
    { question: "Instrument", answer: "Saxophone" },
    { question: "Geoguessr High Score (Classic Mode)", answer: <a href="https://www.geoguessr.com/user/6191d093f629a70001686205" target="_blank" className="bg-link">24998 (profile is linked if you don't believe me)</a> },
    { question: "Musical Artist", answer: "Bladee (where do I even begin)" },
    { question: "TV Show", answer: "Atlanta" },
    { question: "Personality Type", answer: "INTJ" },
    { question: "Time since I was born", answer: <div><TimeSinceDob /></div> },
    { question: "Favorite Programming Language", answer: "C# as of now" },
    { question: "Other Interests", answer: "History, Geography, Music" }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 pb-3">Fun Facts about me</h2>
      <div className="row">
        {facts.map((fact, index) => (
          <FunFactCard key={index} question={fact.question} answer={fact.answer} 
          isGreenGradient={fact.question === "Favorite Color"}/>
        ))}
      </div>
    </div>
  );
}

export default FunFactSection;
