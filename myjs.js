function addText() {
    let container = document.getElementById("text-container");
    let text = document.createElement("P");
    text.innerText = "Hello";
    container.appendChild(text);

}