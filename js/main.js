let SomeJSCode = `document.getElementById("next-arrow").onclick = function () {
    let activeElem = ArrSliderElements.find(function (elem) {
        return  elem.classList.contains("active");
    });
    // First comment
    activeElem.classList.remove("active");
    let currentIndex = ArrSliderElements.indexOf(activeElem);
    if (currentIndex === 3) {
        currentIndex = 0;
        ArrSliderElements[0].classList.add("active");
        slider(ArrSliderElements[currentIndex]);
        return
    }
    ArrSliderElements[currentIndex+1].classList.add("active");
    slider(ArrSliderElements[currentIndex + 1]);
    /*
    Second comment
    */
};`;

let textField = document.getElementById("withComments");
textField.value = SomeJSCode;

document.getElementById("button").onclick = function () {
    let firstRegEXP = textField.value.replace(/\/\*.*?\*\//gs, "");
    document.getElementById("withoutComments").value = firstRegEXP.replace(/\/\/(.*?)\n/gs, "");

};


