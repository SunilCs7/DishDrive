import React, { useState, useEffect } from "react";
import "./Game.css";

const GRID_SIZE = 20; // Number of rows and columns
const INITIAL_SNAKE = [{ x: 10, y: 10 }]; // Initial snake position
const INITIAL_FOOD = { x: 5, y: 5 }; // Initial food position

const Game = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(moveSnake, 200); // Snake speed
      return () => clearInterval(interval);
    }
  }, [snake, direction, gameOver]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  const moveSnake = () => {
    const newHead = {
      x: snake[0].x + direction.x,
      y: snake[0].y + direction.y,
    };

    if (checkCollision(newHead)) {
      setGameOver(true);
      return;
    }

    const newSnake = [newHead, ...snake];
    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(generateFood());
      setScore(score + 1);
    } else {
      newSnake.pop(); // Remove tail if no food eaten
    }

    setSnake(newSnake);
  };

  const checkCollision = (head) => {
    // Check wall collision
    if (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE
    ) {
      return true;
    }
    // Check self-collision
    return snake.some(
      (segment) => segment.x === head.x && segment.y === head.y
    );
  };

  const generateFood = () => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (
      snake.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      )
    );
    return newFood;
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection({ x: 0, y: 0 });
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Snake Game</h1>
      <p className="game-score">Score: {score}</p>
      {gameOver ? (
        <div className="game-over">
          <h2>Game Over!</h2>
          <button onClick={resetGame}>Restart</button>
        </div>
      ) : (
        <div className="game-grid">
          {Array.from({ length: GRID_SIZE }).map((_, row) => (
            <div key={row} className="grid-row">
              {Array.from({ length: GRID_SIZE }).map((_, col) => {
                const isSnake = snake.some(
                  (segment) => segment.x === col && segment.y === row
                );
                const isFood = food.x === col && food.y === row;
                return (
                  <div
                    key={col}
                    className={`grid-cell ${isSnake ? "snake" : ""} ${
                      isFood ? "food" : ""
                    }`}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Game;
