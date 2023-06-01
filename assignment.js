var jsonData = [
    { "day 1": "Reach the destination" },
    { "day 2": "City Tour in a company tourist bus" },
    { "day 2": "Breakfast & Dinner" },
    { "day 3": "Visit Chang-La" },
    { "day 4": "Back to your home" },
];
var select = document.querySelector("#day");
var content = document.querySelector(".content");
select.addEventListener("click", function () {
    var value = select.value;
    jsonData.forEach(function (data) {
        if (data[value]) {
            var childElement = "<div>".concat(data[value], "</div>");
            content.innerHTML = childElement;
        }
    });
});
