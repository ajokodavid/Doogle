const form = document.getElementById("form");
const input = document.getElementById("gsearch");
const google = "https://www.google.com/search?q=";
// const site = "google.com"

function submitted(event) {
    event.preventDefault();
    const url = google + input.value;
    const win = window.open(url, "_top");
    win.focus();
    console.log("submitted");
}

form.addEventListener("submit", submitted)