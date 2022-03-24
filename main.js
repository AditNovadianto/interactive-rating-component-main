const number = document.querySelectorAll(".circle");
const submit = document.querySelector(".container .button");
const result = document.querySelector(".thankyou-section .result");
const container = document.querySelector(".container");

container.addEventListener("animationend", () => {
  container.classList.remove("nope");
});

let isSelected = false;

let show = () => {
  const thankyouSection = document.querySelector(".thankyou-section");

  if (!isSelected) {
    container.classList.add("nope");
    return;
  }

  container.style.display = "none";
  thankyouSection.style.display = "block";
};

submit.addEventListener("click", show);

for (let i = 0; 1 < number.length; i++) {
  number[i].addEventListener("click", function () {
    isSelected = true;

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
