const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 3000;
app.use(cors({ origin: "*" }));

const questions = require("./questions.js");
let currentQuestionIndex = 0;
let leaderboard = [];
let timerInterval;
let timeLeft = 10;

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.emit("newQuestion", questions[currentQuestionIndex]);

  socket.on("join", ({ username }) => {
    console.log(`${username} joined the quiz`);
    socket.username = username;
    leaderboard.push({ username, score: 0 });
    updateLeaderboard();
  });

  socket.on("submitAnswer", ({ selectedOptionIndex }) => {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];

      if (selectedOptionIndex === currentQuestion.correctIndex) {
        const userIndex = leaderboard.findIndex(
          (entry) => entry.username === socket.username
        );
        if (userIndex !== -1) {
          leaderboard[userIndex].score++;
          updateLeaderboard();
        }
      }

      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        io.emit("newQuestion", questions[currentQuestionIndex]);
      } else {
        io.emit("updateLeaderboard", leaderboard);
      }
    }
  });

  socket.on("disconnect", () => {
    console.log(`${socket.username} disconnected`);
    leaderboard = leaderboard.filter(
      (entry) => entry.username !== socket.username
    );
    updateLeaderboard();
  });

  socket.on("noAnswerSelected", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      io.emit("newQuestion", questions[currentQuestionIndex]);
    } else {
      io.emit("updateLeaderboard", leaderboard);
    }
  });

  function updateLeaderboard() {
    leaderboard.sort((a, b) => b.score - a.score);
    io.emit("updateLeaderboard", leaderboard);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
