$(document).ready(function(){
    $('#loginForm').submit(function(event) {
        event.preventDefault();

        const username = $('#username').val();
        const password = $('#password').val();
        // Пароль не проверяется, т.к. в jsonplaceholder ручке его нет

        $.ajax({
            url: `https://jsonplaceholder.typicode.com/users?username=${username}`,
            method: 'GET',
            success: function(users) {
                if (users.length > 0) {
                    // В случае, если пользователь существует, моделируем успешный логин
                    const user = users[0];
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
