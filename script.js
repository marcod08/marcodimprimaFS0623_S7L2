//esercizio 1
const inputName = document.querySelector("#name")
const divName = document.querySelector("#showName")
const submitBtn = document.querySelector("#submitBtn")
const deleteBtn = document.querySelector("#deleteBtn")

function addName () {
    //event.preventDefault();
    //divName.innerHTML = inputName.value;
    localStorage.setItem("UserName", inputName.value);
    document.querySelector("form").reset();
    showName()
}

function deleteName () {
    //event.preventDefault();
    //divName.innerHTML = "";
    localStorage.removeItem("UserName");
    document.querySelector("form").reset();
    showName()
}

function showName () {
    divName.innerHTML = localStorage.getItem("UserName")|| "";
}

showName()
submitBtn.addEventListener("click", addName);
deleteBtn.addEventListener("click", deleteName);

//esercizio 2
const divClock = document.querySelector("#clock")

function counter() {
    let seconds = parseInt(sessionStorage.getItem("clock")) || 0;
    seconds++;
    sessionStorage.setItem("clock", seconds);
    divClock.innerHTML = seconds;
} setInterval(counter, 1000)

counter()