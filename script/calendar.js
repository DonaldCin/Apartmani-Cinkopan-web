document.addEventListener("DOMContentLoaded", function () {
    const months = document.querySelectorAll(".month");
    const buttons = document.querySelectorAll(".calendar-button");

    let currentMonthIndex = 0;

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (button.classList.contains("next")) {
                showMonth(currentMonthIndex + 1);
            } else if (button.classList.contains("prev")) {
                showMonth(currentMonthIndex - 1);
            }
        });
    });

    function showMonth(index) {
        months[currentMonthIndex].classList.remove("active");
        currentMonthIndex = (index + months.length) % months.length;
        months[currentMonthIndex].classList.add("active");
    }
});