document.addEventListener("DOMContentLoaded", function () {
    // Получение текущей даты и времени
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString("en-US", { weekday: "long" });
    const currentTime = currentDate.toLocaleTimeString("en-US", { hour12: true, hour: "numeric", minute: "numeric", second: "numeric" });

    // Вывод текущего дня и времени на страницу
    document.getElementById("day").textContent = `Сегодня: ${currentDay}`;
    document.getElementById("time").textContent = `Текущее время: ${currentTime}`;

    // Расчет оставшихся дней до нового года
    const newYear = new Date(currentDate.getFullYear() + 1, 0, 1);
    const daysToNewYear = Math.floor((newYear - currentDate) / (1000 * 60 * 60 * 24));

    // Вывод оставшихся дней до нового года на страницу
    document.getElementById("daysToNewYear").textContent = `До нового года осталось ${daysToNewYear} дней`;
});
