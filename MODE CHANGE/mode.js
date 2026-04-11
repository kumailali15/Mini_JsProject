let modebtn = document.querySelector("#mode")
let currentmode = "lightmode"

modebtn.addEventListener("click", modechange)

function modechange() {
    if (currentmode === "lightmode") {
        currentmode = "darkmode"
        document.body.classList.add("dark")
        document.body.classList.remove("white")
    } else {
        currentmode = "lightmode"
        document.body.classList.add("white")
        document.body.classList.remove("dark")
    }
    console.log(currentmode)
}