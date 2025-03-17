const createForm = document.getElementById("create-form");
const questionInput = document.getElementById("create__question--Input");
const answerInput = document.getElementById("create__Answer--Input");
const tagInput = document.getElementById("create__tag--Input");
const quizContainer = document.getElementById("quiz-container");

const questionCounter = document.getElementById("question-counter");
const answerCounter = document.getElementById("answer-counter");
const tagCounter = document.getElementById("tag-counter");

const maxLength = 150;

function updateCounter(input, counterElement) {
  const remaining = maxLength - input.value.length;
  counterElement.textContent = `${remaining} /150`;
}

questionInput.addEventListener("input", () =>
  updateCounter(questionInput, questionCounter)
);
answerInput.addEventListener("input", () =>
  updateCounter(answerInput, answerCounter)
);
tagInput.addEventListener("input", () => updateCounter(tagInput, tagCounter));

createForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = questionInput.value;
  const answer = answerInput.value;
  const tag = tagInput.value;

  if (question && answer) {
    const newCard = document.createElement("section");
    newCard.classList.add("card");
    newCard.setAttribute("data-js", "card");

    newCard.innerHTML = `
      <button data-js="toggle-bookmark" class="card-bookmark">
        <img src="./img/bookmark.svg" alt="" class="card-bookmark-svg" />
      </button>
      <h3 class="card-question">${question}</h3>
      <button class="card-button" data-js="card-button">Show answer</button>
      <div class="card-answers">
        <p class="card-answer-tag" data-js="card-answer-tag">${answer}</p>
      </div>
      <ul class="hash-section">
        <li class="hash">#${tag}</li>
      </ul>
    `;

    quizContainer.appendChild(newCard);

    questionInput.value = "";
    answerInput.value = "";
    tagInput.value = "";

    // Zähler zurücksetzen
    updateCounter(questionInput, questionCounter);
    updateCounter(answerInput, answerCounter);
    updateCounter(tagInput, tagCounter);
  }
});

// Initialisiere die Zähler
updateCounter(questionInput, questionCounter);
updateCounter(answerInput, answerCounter);
updateCounter(tagInput, tagCounter);
