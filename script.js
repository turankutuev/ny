function showGreeting() {
    var name = document.getElementById('child-name').value;
    if (name.trim() === '') {
        alert('Атыңызды жазыңыз.');
        return;
    }

    // Отображение персонального поздравления
    var greetingContainer = document.getElementById('santa-greeting');
    var personalGreeting = document.getElementById('personal-greeting');
    personalGreeting.textContent = 'Кымбаттуу ' + name + ', Жаңы жыл — бул сыйкыр жана тилектер орундалуучу убакыт. Кыялдарыңыз ишке ашсын, күндөрүңүз жаңы ачылыштарга толсун, ал эми үйүңүздө ар дайым күлкү жана бакыт болсун ❄️';
    greetingContainer.style.display = 'block';

    // Отображение советов
    var tipsContainer = document.getElementById('new-year-tips');
    var childNameDisplay = document.getElementById('child-name-display');
    var tipsContent = document.getElementById('tips-content');

    // Здесь вы можете вставить реальные советы и включить имя ребенка
    var tipsText = '1. Балатыны түстүү оюнчуктар жана гирляндалар менен кооздоңуз\n' +
        '2. Жакындарыңыз үчүн жаңы жылдык куттуктоо жазып жана тартыңыз\n' +
        '3. Сүйүктүү Жаңы жылдык Мультфильмдерин көрүңүз.\n' +
        '4. Көчөдө кар киши жасаңыз\n' +
        '5. Эң жашыруун тилегиңди тиле!';

    childNameDisplay.textContent = name;
    tipsContent.textContent = tipsText;

    tipsContainer.style.display = 'block';

    // Прокрутка к началу поздравления
    greetingContainer.scrollIntoView({ behavior: 'smooth' });
} 
