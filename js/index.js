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
  console.log("works");
  cardBookmark.classList.toggle("card-bookmark-active");

  if (cardBookmark.classList.contains("card-bookmark-active")) {
    element.classList.add("card-bookmark-active");
  } else {
    element.classList.add("card-bookmark");
  }
});
