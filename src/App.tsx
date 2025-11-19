import { useState } from "react";
import "./App.css";
import lamp from './assets/Lamp.png';

export default function App() {
  const [answer, setAnswer] = useState("");
  const [isRevealing, setIsRevealing] = useState(false);
  const [questionValue, setQuestionValue] = useState("");
  
  const responses = ["Yes", "No", "Maybe", "Ask again later", "Definitely"];

  const [theme, setTheme] = useState("Standard");
  const themes = ["Standard", "Poison", "Gold", "Mystic"];
  const toggleTheme = () => {
  const currentIndex = themes.indexOf(theme);
  const nextIndex = (currentIndex + 1) % themes.length;
  setTheme(themes[nextIndex]);
};
  
  const handleMouseOver = () => {
    setQuestionValue("");
    const randomIndex = Math.floor(Math.random() * responses.length);
  
        setAnswer(responses[randomIndex]);
        setIsRevealing(true);
  };
  
  const handleMouseOut = () => {
    setAnswer("");
    setIsRevealing(false);
  };
  
  return (
    <div className={`centered theme-${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        Switch Theme (Current: {theme})
      </button>
      <h1 className="fancy-title">Oracle of the Internet</h1>
      <p>Enter your yes or no question here.</p>
      <input 
        type="text" 
        id="question" 
        value={questionValue}
        onChange={(e) => setQuestionValue(e.target.value)}
      />
      <p>Rub the magic lamp to receive your answer.</p>
      <div className="lamp-container" key={theme}>
        <img
          className="lamp"
          src={lamp}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </div>
      <hr />
      <div className="answer-container">
        <div className={`fog ${isRevealing ? 'active' : ''}`}></div>
        <h2 className={answer ? 'visible' : ''}>{answer}</h2>
      </div>
    </div>
  );
}