document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('deadlineForm');
    const deadlineList = document.getElementById('deadlineList');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Получаем значения из формы
        const subject = form.elements.subject.value;
        const deadline = form.elements.deadline.value;

        // Добавляем данные в таблицу
        addToDeadlineList(subject, deadline);

        // Сохраняем данные в LocalStorage
        saveToLocalStorage(getDeadlineListFromTable());
    });

    // При загрузке страницы восстанавливаем данные из LocalStorage
    const savedData = getFromLocalStorage();
    if (savedData) {
        renderDeadlineList(savedData);
    }

    // Функция для добавления данных в таблицу
    function addToDeadlineList(subject, deadline) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${subject}</td><td>${deadline}</td>`;
        deadlineList.appendChild(row);

        // Очищаем форму после добавления
        form.reset();
    }

    // Функция для получения данных из таблицы
    function getDeadlineListFromTable() {
        const rows = deadlineList.querySelectorAll('tr');
        const deadlineListData = [];

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length === 2) {
                const subject = cells[0].innerText;
                const deadline = cells[1].innerText;
                deadlineListData.push({ subject, deadline });
            }
        });

        return deadlineListData;
    }

    // Функция для отображения данных в таблице
    function renderDeadlineList(data) {
        data.forEach(item => {
            addToDeadlineList(item.subject, item.deadline);
        });
    }

    // Функция для сохранения данных в LocalStorage
    function saveToLocalStorage(data) {
        localStorage.setItem('deadlineList', JSON.stringify(data));
    }

    // Функция для получения данных из LocalStorage
    function getFromLocalStorage() {
        const data = localStorage.getItem('deadlineList');
        return data ? JSON.parse(data) : null;
    }
});