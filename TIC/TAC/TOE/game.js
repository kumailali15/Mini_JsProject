let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#resetbtn")
let newgamebtn = document.querySelector("#newgame")
let turnO = true;
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            box.style.color = "blue"
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "red"
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
})

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner = (winner) => {
    setTimeout(() => {
        alert(`Congratulations, winner is ${winner}`)
        disabledboxes();
    }, 200)
}

const checkwinner = () => {
    for (let patterns of winpatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val)
                showwinner(pos1val)
            }
        }
    }
}
const reset = () => {
    turnO = true;
    enabledboxes();
}
newgame.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);