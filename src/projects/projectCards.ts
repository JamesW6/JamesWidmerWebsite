function initProjectCards() {
    const numCards=5;
    for (let i = 0;i<numCards;i++) {
        addCard();
    }
}
function addCard() {
    const parentDiv = document.getElementById("cards");
    if(parentDiv!=null){
        const newDiv = document.createElement("div");

        const newContent = document.createTextNode("balls");

        newDiv.appendChild(newContent);

        parentDiv.appendChild(newDiv);
    }
}
initProjectCards();