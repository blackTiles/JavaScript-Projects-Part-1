let btn = document.querySelector("#button");

btn.addEventListener("click", () => {
    let bgElement = document.querySelector("#canvas");

    // generating random hex color code 
    let randomColorCode = "#";
    let hex = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
        randomColorCode += hex.charAt(Math.floor(Math.random() * 16));
    }

    // changing backgroundColor 
    bgElement.style.backgroundColor = randomColorCode;
});