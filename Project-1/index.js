var addButton = document.querySelector("#add");
var nameElement = document.querySelector("h5");

let count = 0;

addButton.addEventListener("click", function() {
    if(count == 0) {
        nameElement.innerHTML = 'Friends';
        nameElement.style.color = "green";
        addButton.innerHTML = "Remove Friends";
        count = 1;
    } else {
        nameElement.innerHTML = 'Strangers';
        nameElement.style.color = 'red';
        addButton.innerHTML = "Add Friends";
        count = 0;
    }
});
