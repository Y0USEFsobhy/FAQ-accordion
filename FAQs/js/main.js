
let iconPlusList = document.querySelectorAll(".icon-plus");
let iconMinusList = document.querySelectorAll(".icon-minus");
let iconsList = document.querySelectorAll(".icons");
let answerList = document.querySelectorAll(".answer");
let questionList = document.querySelectorAll(".question");

iconsList.forEach((icon, index) => {
  icon.addEventListener("click", function () {
    let iconPlus = iconPlusList[index];
    let iconMinus = iconMinusList[index];
    let answer = answerList[index];

    if (iconPlus.classList.contains("not-active")) {
      iconPlus.classList.remove("not-active");
      iconPlus.classList.add("active");
      iconMinus.classList.remove("active");
      iconMinus.classList.add("not-active");
      answer.style.display = "none";
    } else {
      iconMinus.classList.remove("not-active");
      iconMinus.classList.add("active");
      iconPlus.classList.remove("active");
      iconPlus.classList.add("not-active");
      answer.style.display = "flex";
    }
  });
});
questionList.forEach((q, index) => {
    q.addEventListener("click", function () {
    let iconPlus = iconPlusList[index];
    let iconMinus = iconMinusList[index];
    let answer = answerList[index];
    let question = questionList[index];

    if (iconPlus.classList.contains("not-active")) {
      iconPlus.classList.remove("not-active");
      iconPlus.classList.add("active");
      iconMinus.classList.remove("active");
      iconMinus.classList.add("not-active");
      answer.style.display = "none";
    } else {
      iconMinus.classList.remove("not-active");
      iconMinus.classList.add("active");
      iconPlus.classList.remove("active");
      iconPlus.classList.add("not-active");
      answer.style.display = "flex";
    }
  });
});

