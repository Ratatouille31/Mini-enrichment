
function rain() {
    let heart = document.createElement("div");

    heart.classList.add("heart")
    heart.innerText = "L";

    heart.style.right = Math.random() * 100 + "vw";

    heart.style.animationDuration = Math.floor(math.random() * 4500) + "ms";

    document.body.appendChild(heart)
.heart {
    position: fixed;
    top: -1vh;
    animation: xd 3s linear infinite
    forwards;
}
@keyframes xd {
    to {
        trasnform: trasnlateY(100vh);
    }
}
}

 const button = document.querySelector(".btn");

 function onCLick() {
    alert("I was clicked")
 }