(function() {
    var startTime = new Date().getTime();

    // Функция для вычисления времени загрузки страницы
    function calculatePageLoadTime() {
        var endTime = new Date().getTime();
        var pageLoadTime = endTime - startTime;

        // Вывод информации в подвал страницы
        var footer = document.createElement('div');
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.left = '0';
        footer.style.width = '100%';
        footer.style.backgroundColor = '#f0f0f0';
        footer.style.padding = '10px';
        footer.innerHTML = 'Страница загружена за ' + pageLoadTime + ' миллисекунд';
        document.body.appendChild(footer);
    }

    // Подписываемся на событие загрузки страницы
    if (window.addEventListener) {
        window.addEventListener('load', calculatePageLoadTime, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', calculatePageLoadTime);
    }
})();