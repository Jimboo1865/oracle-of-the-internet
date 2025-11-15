import { useState } from "react";
import "./App.css";

export default function App() {
 const [answer, setAnswer] = useState("");
 const responses = ["Yes", "No", "Maybe", "Ask again", "Definitely"]
 return (
    <div className="centered">
      <h1 className="fancy-title">Oracle of the Internet</h1>

      <p>Enter your yes or no question here.</p>
      <input type="text" id="question" />
      <p>Rub the magic lamp to recieve your answer.</p>
      <div className="lamp-container">
        <img
        className="lamp"
        src="https://cdn-icons-png.flaticon.com/512/6515/6515279.png"
          onMouseOver={() => {
            const randomIndex = Math.floor(Math.random() * responses.length);
            setAnswer(responses[randomIndex]);
          }}
          onMouseOut={() => setAnswer("")}
          />
        </div>
      <hr />

      <h2>{answer}</h2>
    </div>
 )
}