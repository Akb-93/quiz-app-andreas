const card = document.querySelector('[data-js="card"]');
const answerTag = document.querySelector('[data-js="card-answer-tag"]');
const answerButton = document.querySelector('[data-js="card-button"]');
const cardBookmark = document.querySelector('[data-js="card-bookmark"]');

answerButton.addEventListener("click", () => {
  if (answerTag.style.display === "none") {
    answerTag.style.display = "block";
  } else {
    answerTag.style.display = "none";
  }
});
