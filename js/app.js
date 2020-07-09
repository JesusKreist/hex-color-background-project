let documentBody = document.querySelector("body");
let colourButton = document.getElementById("btn");
let colourOutput = document.getElementById("hex-value");

const genHexColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        color += letters[randomIndex];
    };
    return color;
};

const colorChange = () => {
    let hexColor = genHexColor();
    documentBody.style.backgroundColor = hexColor;
    colourOutput.textContent = `${hexColor}`;
};


colourButton.addEventListener("click", colorChange);

