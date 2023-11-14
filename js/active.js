document.addEventListener("DOMContentLoaded", function () {
    // Получаем текущий путь страницы
    var currentPath = window.location.pathname.split("/")[2];
    //window.alert(currentPath)

    // Находим все ссылки в меню
    var menuLinks = document.querySelectorAll('.header-main-nav a');

    // Проходим по каждой ссылке
    menuLinks.forEach(function (link) {
        // Получаем путь ссылки
        var linkPath = link.getAttribute('href');
        //ywindow.alert(linkPath)

        // Проверяем, является ли текущий путь страницы равным пути ссылки
        if (currentPath === linkPath) {
            // Добавляем класс "current" к родительскому элементу li
            link.parentNode.classList.add('current');
        }
    });
});