const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const submit = document.querySelector(".submit-btn");
let numbers = document.getElementsByClassName('number');
let selectedValue;

function highlightSelected() {
    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];
        if (currentNum === selectedValue) {
            currentNum.addEventListener("click", () => {
                    currentNum.classList.add('selected')
                })
        }
        else {
            currentNum.classList.remove('selected')
        }
    }
}

for (let i=0; i<numbers.length; i++) {
    let currentNum = numbers[i];
    currentNum.addEventListener("click", () => {
        selectedValue = currentNum
        highlightSelected()
    })
}

submit.addEventListener("mouseover", () => {
    submit.style.backgroundColor = "rgb(255, 255, 255)";
    submit.style.color = "rgb(251, 116, 19)";
});
    
submit.addEventListener("mouseout", () => {
    submit.style.backgroundColor = "rgb(251, 116, 19)";
    submit.style.color = "rgb(255, 255, 255)";
});

submit.addEventListener("click", () => {
    if (confirm("Are you sure you want to submit this rating?")) {
        location.href = "file:///D:/Downloads/Compressed/interactive-rating-component-main/closer.html"
    }
});

