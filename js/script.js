document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('posts-container');
    const loadPostsBtn = document.getElementById('load-posts-btn');
    const preloader = document.getElementById('preloader');

    loadPostsBtn.addEventListener('click', function () {
        // При нажатии кнопки загружаем одно случайное сообщение
        loadRandomPost();
    });

    function loadRandomPost() {
        // Показываем preloader перед отправкой запроса
        preloader.style.display = 'block';

        // Генерируем случайный ID для получения случайного поста
        const randomId = Math.floor(Math.random() * 100) + 1;

        // Запрос к /posts с использованием случайного ID
        fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}`)
            .then(response => response.json())
            .then(post => {
                // Рендерим полученный пост
                renderPost(post);
            })
            .catch(error => {
                console.error('Error:', error);
                showError('Something went wrong while loading the post');
            })
            .finally(() => {
                // Скрываем preloader после завершения запроса
                preloader.style.display = 'none';
            });
    }

    function renderPost(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
        postsContainer.appendChild(postElement);
    }

    function showError(message) {
        const errorElement = document.createElement('div');
        errorElement.style.color = 'red';
        errorElement.textContent = `⚠ ${message}`;
        postsContainer.appendChild(errorElement);
    }
});
