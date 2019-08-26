console.log("hello main.js, way to go Heidi");

let name = "Heidi";

console.log(name);

/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/

const sectionEl = document.querySelector(".article__section");

console.log("sectionEl", sectionEl);

/*
    This code will only return the third section component
*/

const footerEl = document.querySelector(".article__footer");

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/

const smallTextEl = document.querySelector(".smallText");
console.log("what is smallText",smallTextEl);
smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText");

