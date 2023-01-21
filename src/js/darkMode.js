const ball = document.querySelector(".ball");

if (localStorage.getItem("darkmode")) {
    ball.classList.add("ball__active");
    document.body.classList.add("darkmode");
}

ball.addEventListener("click", function () {
    if (localStorage.getItem("darkmode")) {
        ball.classList.remove("ball__active");
        document.body.classList.remove("darkmode");
        localStorage.removeItem("darkmode");
    } else {
        ball.classList.add("ball__active");
        document.body.classList.add("darkmode");
        localStorage.setItem("darkmode", true);
    }
});
