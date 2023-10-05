var submitButton = document.getElementById("button");
var checkboxes = document.querySelectorAll(".chkb");
var inputField = document.getElementById("input");

submitButton.addEventListener("click", function() {
    alert("Дякую за участь у нашому опитуванні!");
});

inputField.addEventListener("focus", function() {
    console.log("Будь ласка, введіть своє ім'я тут");
});

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
        switch(event.target.value) {
            case "chocolate":
                console.log("Ви обрали шоколад");
                break;
            case "icecream":
                console.log("Ви обрали морозиво");
                break;
        }
    });
});