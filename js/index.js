const card = document.querySelector('[data-js="card"]');
const answerTag = document.querySelector('[data-js="card-answer-tag"]');
const answerButton = document.querySelector('[data-js="card-button"]');
const cardBookmark = document.querySelector('[data-js="toggle-bookmark"]');

answerButton.addEventListener("click", () => {
  if (answerTag.style.display === "none") {
    answerTag.style.display = "block";
  } else {
    answerTag.style.display = "none";
  }
});

cardBookmark.addEventListener("click", () => {
  console.log("fail");
  if (cardBookmark.style.backgroundColor == "#e1b94a") {
    cardBookmark.style.backgroundColor = "#7d5fff";
  } else {
    cardBookmark.style.backgroundColor = "#e1b94a";
  }
});
