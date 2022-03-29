const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link"); 



navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    })
})


// Reveal hidden Content Buttons
const btnOne = document.querySelector(".revealBtn__one");
const btnTwo = document.querySelector(".revealBtn__two");
const answerOne = document.querySelector(".answer-one");
const answerTwo = document.querySelector(".answer-two")


btnOne.addEventListener("click", function () {
    answerOne.classList.toggle("show-answer");
});


btnTwo.addEventListener("click", () => {
    answerTwo.classList.toggle("show-answer");
})