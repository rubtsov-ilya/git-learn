const customSelect = document.querySelector(".custom-select");
const selectBtn = document.querySelector(".select-button");

const selectedValue = document.querySelector(".selected-value");
const optionsList = document.querySelectorAll(".select-dropdown li");

//инициализация кнопки отправки формы и input для проверки на еррор 
const inputCity = document.querySelector(".city");
const formSubBtn = document.querySelector("#form-submit-btn")

// add click event to select button
selectBtn.addEventListener("click", () => {
  // add/remove active class on the container element
  customSelect.classList.toggle("active");
  // update the aria-expanded attribute based on the current state
  selectBtn.setAttribute(
    "aria-expanded",
    selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});

optionsList.forEach((option) => {
  function handler(e) {
    // Click Events
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue.textContent = this.children[0].textContent;
      customSelect.classList.remove("active");
    }
    // Key Events
    if (e.key === "Enter") {
      selectedValue.textContent = this.textContent;
      customSelect.classList.remove("active");
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});


//отслеживание каждые 100мс появления лейбла с айди сити еррор
let errorSelectChecker = setInterval(function() {
    if (inputCity.classList.contains('error')) {
        clearInterval(errorSelectChecker);
        //let cityErrorLabel = document.querySelector("#city-error");
        customSelect.classList.add("error");
    }
}, 10)

//при клике на кнопку отправки формы если инпут Сити любой первый НЕ содержит еррор
//то удалить класс еррор
formSubBtn.addEventListener("click", () => {
    if (!inputCity.classList.contains('error'))
        customSelect.classList.remove("error");
})
