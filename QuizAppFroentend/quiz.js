const socket = io.connect("http://localhost:3000"); // Update with your server address

let currentQuestion;
let username;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const leaderboardElement = document.getElementById("leaderboard");

// Listen for new questions from the server
socket.on("newQuestion", (question) => {
  currentQuestion = question;
  displayQuestion();
});

// Listen for updated leaderboard from the server
socket.on("updateLeaderboard", (leaderboard) => {
  displayLeaderboard(leaderboard);
});

function displayQuestion() {
  questionElement.textContent = currentQuestion.text;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    optionsElement.innerHTML += `
    <div class="opt">
      <input type="radio" name="answer" value="${index}" id="option${index} >
      <label for="option${index}" >${option}</label><br>
    </div>`;
  });
}

function submitAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (!selectedOption) {
    alert("Please select an answer.");
    return;
  }

  const selectedOptionIndex = parseInt(selectedOption.value);

  // Send the answer to the server
  socket.emit("submitAnswer", { selectedOptionIndex });

  // Clear selected option
  selectedOption.checked = false;
}

function displayLeaderboard(leaderboard) {
  leaderboardElement.innerHTML = "";

  leaderboard.forEach((entry, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("score");
    if (index == 0) {
      listItem.classList.remove("Y");
      listItem.classList.remove("R");
      listItem.classList.add("G");
    } else if (index == 1) {
      listItem.classList.remove("G");
      listItem.classList.remove("R");
      listItem.classList.add("Y");
    } else {
      listItem.classList.remove("G");
      listItem.classList.remove("Y");
      listItem.classList.add("R");
    }
    listItem.textContent = ` ${entry.username} - Score: ${entry.score}`;
    leaderboardElement.appendChild(listItem);
  });
}

// Prompt for username when the page loads
username = prompt("Enter your username:");
socket.emit("join", { username });
