let range = document.getElementById("range")
let song = document.getElementById("progressctrl")
let ctrl = document.getElementById("playctrl")

song.onloadedmetadata = function () {
    range.max = song.duration;
    range.value = song.currentTime;
}

ctrl.addEventListener("click", () => {
    if (ctrl.classList.contains("fa-pause")) {
        song.pause();
        ctrl.classList.remove("fa-pause")
        ctrl.classList.add("fa-play")

    }
    else {
        song.play();
        ctrl.classList.add("fa-pause")
        ctrl.classList.remove("fa-play")
    }

})

if (song.play()) {
    setInterval(() => {
        range.value = song.currentTime
    }, 500)
}

progress.onchange = function () {
    song.play();
    song.currentTime = range.value
    ctrl.classList.add("fa-pause")
    ctrl.classList.remove("fa-play")
}