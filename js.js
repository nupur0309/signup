document.addEventListener("DOMContentLoaded", function() {
    const changeColorButton = document.getElementById("changeColorButton");

    changeColorButton.addEventListener("click", function() {
        const h1Element = document.querySelector("h1");
        h1Element.style.color = getRandomColor();
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
