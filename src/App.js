import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const collection = {
    prog: [
      {
        name: "CRACKING the CODING INTERVIEW",
        rating: "4.3/5"
      },
      {
        name: "Eloquent JavaScript",
        rating: "4.1/5"
      },
      {
        name: "Head First Java",
        rating: "4.2/5"
      },
      {
        name: "Grokking Algorithms",
        rating: "4.4/5"
      }
    ],
    fiction: [
      {
        name: "The Lord of the Rings",
        rating: "4.5/5"
      },
      {
        name: "To Kill a Mockingbird",
        rating: "4.3/5"
      },
      {
        name: "Moby Dick",
        rating: "3.5/5"
      },
      {
        name: "The Book Thief",
        rating: "4.4/5"
      }
    ],
    novel: [
      {
        name: "One Hundred Years of Solitude",
        rating: "4.1/5"
      },
      {
        name: "The Great Gatsby",
        rating: "3.9/5"
      }
    ]
  };

  const [which, setWhich] = useState("prog");

  const handleClick = (e) => {
    setWhich(e.target.value);
  };

  return (
    <div className="app">
      <header>
        <nav>
          <h1>📚 Arigatou Reads </h1>
        </nav>
      </header>
      <div className="container">
        <p>
          Checkout my collection of favourite books 📕📗📙. Pick a genre to get
          started.
        </p>
        <div className="buttons">
          <button onClick={handleClick} value="prog">
            Programming
          </button>
          <button onClick={handleClick} value="fiction">
            Fiction
          </button>
          <button onClick={handleClick} value="novel">
            Novel
          </button>
        </div>
        <div className="books">
          {collection[which].map((item) => {
            return (
              <div key={item.name} className="box">
                <h3>{item.name}</h3>
                <p>{item.rating}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
