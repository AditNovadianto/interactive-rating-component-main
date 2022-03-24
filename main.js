// const number1 = document.querySelector(".number .one");
// const number2 = document.querySelector(".number .two");
// const number3 = document.querySelector(".number .three");
// const number4 = document.querySelector(".number .four");
// const number5 = document.querySelector(".number .five");
// const submit = document.querySelector(".container button");
// const result = document.querySelector(".thankyou-section .result");

// let show = () => {
//   const container = document.querySelector(".container");
//   const thankyouSection = document.querySelector(".thankyou-section");

//   container.style.display = "none";
//   thankyouSection.style.display = "block";
// };

// let click1 = () => {
//   result.innerHTML = "You selected 1 out of 5";

//   number1.classList.toggle("change");
// };

// let click2 = () => {
//   result.innerHTML = "You selected 2 out of 5";

//   number2.classList.toggle("change");
// };

// let click3 = () => {
//   result.innerHTML = "You selected 3 out of 5";

//   number3.classList.toggle("change");
// };

// let click4 = () => {
//   result.innerHTML = "You selected 4 out of 5";

//   number4.classList.toggle("change");
// };

// let click5 = () => {
//   result.innerHTML = "You selected 5 out of 5";

//   number5.classList.toggle("change");
// };

// number1.addEventListener("click", click1);
// number2.addEventListener("click", click2);
// number3.addEventListener("click", click3);
// number4.addEventListener("click", click4);
// number5.addEventListener("click", click5);
// submit.addEventListener("click", show);

const number = document.querySelectorAll(".circle");
const submit = document.querySelector(".container .button");
const result = document.querySelector(".thankyou-section .result");

let show = () => {
  const container = document.querySelector(".container");
  const thankyouSection = document.querySelector(".thankyou-section");

  container.style.display = "none";
  thankyouSection.style.display = "block";
};

submit.addEventListener("click", show);

for (let i = 0; 1 < number.length; i++) {
  number[i].addEventListener("click", function () {
    number.forEach((number, index) => {
      if (index == i) {
        return;
      }

      number.classList.remove("change");
    });

    result.innerHTML = `You selected ${i + 1} out of 5`;

    number[i].classList.toggle("change");
  });
}
