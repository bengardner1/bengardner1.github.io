import React from "react";
import FunFactCard from "./FunFactCard";
import TimeSinceDob from "./TimeSinceDob";

function FunFactSection() {
  const facts = [
    { question: "Dream Travel Destination", answer: "New Zealand (partially bc of Lord of the Rings movies)  " },
    { question: "Favorite Food", answer: "Korean"},
    { question: "Instrument", answer: "Saxophone (clarinet too)" },
    { question: "Geoguessr High Score (Classic Mode)", answer: <a href="https://www.geoguessr.com/user/6191d093f629a70001686205" target="_blank">24998 (profile is linked if you don't believe me)</a> },
    { question: "Favorite Musical Artist", answer: <a href="https://wrbbradio.org/articles/bladee-is-actually-good" target="_blank">Bladee (where do I even begin)</a> },
    { question: "TV Show", answer: "Atlanta" },
    { question: "Favorite Color", answer: "Green" },
    { question: "Personality Type", answer: "INTJ/ENTJ" },
    { question: "Time since I was born", answer: <div><TimeSinceDob /></div> },
    { question: "Favorite Book", answer: "Catch-22"},
    { question: "Favorite Pokemon", answer: "Natu, Cyndaquil, Machamp, Gengar, Toxicroak, Bisharp, etc." },
    { question: "Other Interests", answer: "History, Geography, Music Journalism, Travel, Magic the Gathering, Working out" }
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
