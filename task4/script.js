document.querySelector('#link').addEventListener('click', function() {
    pasport= prompt('Для перехода на сайт введите свой возраст');
    event.preventDefault();
    this.textContent=(pasport + '? Ты слишком мал еще для этих кирпичей!');
    //при вводе любого значения результат будет одинаковый
})