var addButton = document.querySelector("#add");
var nameElement = document.querySelector("h5");
var removeButton = document.querySelector('#remove')

addButton.addEventListener("click", function() {
    nameElement.innerHTML = 'Friends';
    newElement.style.color = "green";
});


removeButton.addEventListener("click", function() {
    nameElement.innerHTML = 'Stranges';
    newElement.style.color = 'red';
});