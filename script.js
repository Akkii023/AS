const questions = [
  {
    question: "What is my favorite color?",
    options: ["Blue", "Red", "Green", "Purple"],
    correctAnswer: 0,
    gifts: ["Candle set", "Custom mug", "Photo frame", "Chocolate box"],
  },
  {
    question: "Where did we have our first date?",
    options: ["Restaurant", "Park", "Beach", "Movies"],
    correctAnswer: 2,
    gifts: ["Handwritten letter", "Flower bouquet", "Star map", "Jewelry"],
  },
  {
    question: "What is my dream destination?",
    options: ["Paris", "Maldives", "New York", "Tokyo"],
    correctAnswer: 1,
    gifts: ["Book collection", "Scrapbook", "Cooking class", "Perfume set"],
  },
  {
    question: "Which movie is our favorite?",
    options: ["The Notebook", "Titanic", "La La Land", "Casablanca"],
    correctAnswer: 3,
    gifts: ["Personalized playlist", "Movie night basket", "Subscription service", "Handmade coupon book"],
  },
];

let currentQuestion = 0;
let correctAnswers = 0;

function startQuiz() {
  displayQuestion();
}

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const giftContainer = document.getElementById("gift-container");

  questionElement.textContent = questions[currentQuestion].question;

  optionsContainer.innerHTML = "";
  questions[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;
    button.onclick = function () {
      checkAnswer(this);
    };
    optionsContainer.appendChild(button);
  });

  optionsContainer.style.display = "block";
  giftContainer.style.display = "none";
}

function checkAnswer(selectedOption) {
  const selectedIndex = Array.from(selectedOption.parentNode.children).indexOf(
    selectedOption
  );

  const giftContainer = document.getElementById("gift-container");
  const giftList = document.getElementById("gift-list");

  if (selectedIndex === questions[currentQuestion].correctAnswer) {
    // Correct answer
    giftList.innerHTML = "";
    questions[currentQuestion].gifts.forEach((gift) => {
      const listItem = document.createElement("li");
      listItem.textContent = gift;
      giftList.appendChild(listItem);
    });

    giftContainer.style.display = "block";
    correctAnswers++;
  } else {
    // Incorrect answer
    alert("Aww, you missed it! Let's see what gifts you missed on.\n\nCorrect Answer: " + questions[currentQuestion].options[questions[currentQuestion].correctAnswer]);
    giftContainer.style.display = "block";
  }

  // Move to the next question or show marriage popup
  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    const marriagePopup = document.getElementById("marriage-popup");
    const marriageMessage = document.getElementById("marriage-message");
    const marriageGiftList = document.getElementById("marriage-gift-list");

    marriageMessage.textContent = "I love you, baby!";
    marriageGiftList.innerHTML = "";

    for (let i = 0; i < correctAnswers; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = "Gift " + (i + 1);
      marriageGiftList.appendChild(listItem);
    }

    marriagePopup.style.display = "block";
  }
}

function moveNoButton() {
  const noButton = document.getElementById("no-button");
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * window.innerWidth + "px";
  noButton.style.top = Math.random() * window.innerHeight + "px";
}

function teaseNoButton() {
  alert("Aww, try using the 'No' button!");
}

// Start the quiz when the page loads
startQuiz();