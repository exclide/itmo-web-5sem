$(document).ready(function(){
    // При загрузке страницы проверяем, сохранены ли данные о пользователе в localStorage
    const storedUsername = localStorage.getItem('loggedInUsername');

    if (storedUsername) {
        // Если данные о пользователе сохранены, показываем блок с информацией о пользователе
        $('#authContainer').hide();
        $('#userInfo').show();
        $('#loggedInUsername').text(storedUsername);
    }

    $('#loginForm').submit(function(event) {
        event.preventDefault();

        const username = $('#username').val();
        const password = $('#password').val();

        $.ajax({
            url: `https://jsonplaceholder.typicode.com/users?username=${username}`,
            method: 'GET',
            success: function(users) {
                if (users.length > 0) {
                    // В случае успешной аутентификации
                    const user = users[0];

                    // Сохраняем информацию о пользователе в localStorage
                    localStorage.setItem('loggedInUsername', user.name);

                    // Показываем блок с информацией о пользователе
                    $('#authContainer').hide();
                    $('#userInfo').show();
                    $('#loggedInUsername').text(user.name);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Authentication Failed',
                        text: 'User not found'
                    });
                }
            },
            error: function() {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred while processing your request.'
                });
            }
        });
    });
});
