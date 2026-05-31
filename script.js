// Smooth scroll button
function scrollToAbout(){
  document.getElementById("about").scrollIntoView({behavior:"smooth"});
}

// Typing Animation
const text = ["Web Developer", "Java Learner", "Creative Designer","C learner","Python learner"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
  if(count === text.length){
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
  }

  setTimeout(type, 150);
})();



const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault(); // prevent page reload

    alert("Message Sent Successfully ✅");

    form.reset(); // 🔥 This clears all fields automatically
});