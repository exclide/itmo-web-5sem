$(document).ready(function(){
    // Обработчик клика по кнопке "Open Authentication Modal"
    $('#openAuthModalBtn').click(function() {
        // Открываем модальное окно аутентификации с использованием SweetAlert2
        Swal.fire({
            title: 'Authentication', // Заголовок модального окна
            html:
                '<input type="text" id="username" class="swal2-input" placeholder="Username">' +
                '<input type="password" id="password" class="swal2-input" placeholder="Password">',
            showCancelButton: true, // Показываем кнопку отмены
            confirmButtonText: 'Login', // Текст кнопки подтверждения
            cancelButtonText: 'Cancel' // Текст кнопки отмены
        }).then((result) => {
            if (result.isConfirmed) {
                // Ваша логика аутентификации

                // Получаем значения полей ввода
                const username = $('#username').val();
                const password = $('#password').val();

                // Предположим, что ваша логика валидации проста и вы используете условие
                if (username === 'asd' && password === 'asd') {
                    // При успешной аутентификации
                    toastr.success('Authentication Successful!', 'OK');
                } else {
                    // При неуспешной аутентификации
                    toastr.error('Authentication Failed!', 'FAIL');
                }
            }
        });
    });
});
