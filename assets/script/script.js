const rub = 'рублей'; 
//let quantity = ;
let price = 500;
const calculateTotalPrice = (quantity = 2,price = 500) => {
    const result = quantity * price;
    let showMessage = `Стоимость покупки: ${result.toLocaleString('ru-RU')} ${rub}`;
    let paragraph = document.getElementById ('price');
    paragraph.textContent = showMessage ;
}
calculateTotalPrice()
//Вам необходимо создать функцию calculateTotalPrice(), которая принимает два аргумента - quantity (количество товаров) и price (цена за единицу товара). Если значения не переданы, функция должна использовать значения по умолчанию, например: quantity = 2 и price = 15000000.
//Функция должна производить расчет общей стоимости покупки, умножая количество товаров на их цену. Затем полученное значение необходимо отформатировать с использованием функции toLocaleString('ru-RU'), чтобы отобразить разделитель тысяч и соответствующую валюту (рубли). Про toLocaleString().
//Наконец, выведите результат расчета в виде сообщения с помощью функции alert(). Сообщение должно содержать текст "Стоимость покупки: [форматированное значение] рублей".