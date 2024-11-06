const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const details = document.querySelector("[data-sidebar]");
const detailsBtn = document.querySelector('[data-sidebar-btn]');
detailsBtn.addEventListener('click',() => {elementToggleFunc(details)});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");


select.addEventListener("click", function () { elementToggleFunc(this); });

selectItems.forEach((item) => item.addEventListener("click", function()  {
 

  let selectedValue = this.innerText.toLowerCase();
  selectValue.innerHTML = this.innerText;
  elementToggleFunc(select);
  filterFunc(selectedValue);
}));



const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    const category = item.getAttribute("data-category").toLocaleLowerCase();
    console.log(`Item: ${item}, Category: ${category}`);
  
    if (selectedValue === "all")  {
      item.classList.add("active");
    } else if(selectedValue === category){
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all inputs

formInputs.forEach((input) => {
input.addEventListener("input", function () {

  // check form validation
  if (form.checkValidity()) {
    formBtn.removeAttribute("disabled");
  } else {
    formBtn.setAttribute("disabled", "");
  }

});

})