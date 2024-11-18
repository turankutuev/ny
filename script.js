function showGreeting() {
    var name = document.getElementById('child-name').value;
    if (name.trim() === '') {
        alert('Пожалуйста, введите ваше имя.');
        return;
    }

    // Отображение персонального поздравления
    var greetingContainer = document.getElementById('santa-greeting');
    var personalGreeting = document.getElementById('personal-greeting');
    personalGreeting.textContent = 'Дорогой ' + name + ' Поздравляю тебя с самым волшебным праздником — Новым годом! ❄️';
    greetingContainer.style.display = 'block';

    // Отображение советов
    var tipsContainer = document.getElementById('new-year-tips');
    var childNameDisplay = document.getElementById('child-name-display');
    var tipsContent = document.getElementById('tips-content');

    // Здесь вы можете вставить реальные советы и включить имя ребенка
    var tipsText = '1. Укрась елку яркими игрушками и гирляндами.\n' +
        '2. Нарисуй новогодние открытки для близких.\n' +
        '3. Посмотри любимые новогодние мультфильмы.\n' +
        '4. Слепи снеговика на улице.\n' +
        '5. Загадай самое заветное желание!';

    childNameDisplay.textContent = name;
    tipsContent.textContent = tipsText;

    tipsContainer.style.display = 'block';

    // Прокрутка к началу поздравления
    greetingContainer.scrollIntoView({ behavior: 'smooth' });
} 