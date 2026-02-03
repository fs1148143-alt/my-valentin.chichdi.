const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const message = document.getElementById("message");
const buttons = document.querySelector(".buttons");

noBtn.addEventListener("touchstart", moveButton); // Mobile/Tablet ke liye
noBtn.addEventListener("mouseover", moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = ${x}px;
    noBtn.style.top = ${y}px;
}

yesBtn.addEventListener("click", () => {
    question.style.display = "none";
    buttons.style.display = "none";
    message.classList.remove("hidden");
});
