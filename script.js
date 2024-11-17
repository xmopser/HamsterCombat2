let cookies = 0; // Печеньки
let bouns_lvl = 0; // Уровень 1 буста
let superbouns_lvl = 0; // Уровень 2 буста
let bouns_price = [10, 100, 250, 500, 950, 1250, 2000, 5500, 8500, 10000, 20000, 35000, 50000, 70000, 100000,  150000, 250000, 400000, 650000, 1000000]; // Стоимости прокачки 1 буста
let superbouns_price = [500, 800, 1500, 7000, 10000, 20000, 70000, 250000, 800000, 1500000]; // Стоимости прокачки 2 буста
let accept = 0; // Проверка готовности пользователя перед вручение подарка

document.getElementById('cookie').onclick = function() { // Клик по печеньке
    if (superbouns_lvl == 0){ // Расчитывание награды
        cookies = cookies + (1 + (bouns_lvl * 2))
        document.getElementById('click_counter').textContent = "Доход в клик: " + (1 + (bouns_lvl * 2)); // Показ количества печенек
    }
    else {
        if (superbouns_lvl >= 6){
            cookies = cookies + ((1 + (bouns_lvl * 2)) * ((superbouns_lvl + 1) * 10))
            document.getElementById('click_counter').textContent = "Доход в клик: " + ((1 + (bouns_lvl * 2)) * ((superbouns_lvl + 1) * 10)); // Показ количества печенек
        }
        else{
            cookies = cookies + ((1 + (bouns_lvl * 2)) * ((superbouns_lvl + 1) * 4))
            document.getElementById('click_counter').textContent = "Доход в клик: " + ((1 + (bouns_lvl * 2)) * ((superbouns_lvl + 1) * 4)); // Показ количества печенек
        }
    }
 document.getElementById('counter').textContent = "HamsterShitoins: " + cookies; // Показ количества печенек
};

document.getElementById("boost_buy_bonus").onclick = function() { // Покупка 1 буста
 if (cookies < bouns_price[bouns_lvl]){ // Проверка количества печенек
     document.getElementById('counter').textContent = "Недостаточно HamsterShitoins!";
 }
 else if (20 == bouns_lvl){ // Проверка уровня
     document.getElementById('counter').textContent = "Максимальный уровень!";
 }
 else {
     document.getElementById('counter').textContent = "Успешная покупка!";
     cookies = cookies - bouns_price[bouns_lvl];
     bouns_lvl++; // Покупка буста
     if (20 == bouns_lvl){ // Показ данных о максимальном уровне буста
         document.getElementById('boost_lvl_bouns').textContent = "Максимальный уровень!";
         document.getElementById('boost_about_bouns').textContent = "Бонус получаемых HamsterShitoins.";
         document.getElementById("boost_buy_bonus").textContent = "Куплено!";
     }
     else{ // Показ данных о улучшении буста
         document.getElementById('boost_lvl_bouns').textContent = "Уровень " + bouns_lvl;
         document.getElementById('boost_about_bouns').textContent = "Бонус получаемых HamsterShitoins. Цена: " + bouns_price[bouns_lvl] + " HamsterShitoins";
         document.getElementById("boost_buy_bonus").textContent = "Улучшить";
     }
 }
};

document.getElementById("boost_buy_superbonus").onclick = function() { // Покупка 2 буста
 if (cookies < superbouns_price[superbouns_lvl]){ // Проверка количества печенек
     document.getElementById('counter').textContent = "Недостаточно HamsterShitoins!";
 }
 else if (10 == superbouns_lvl){ // Проверка уровня
     document.getElementById('counter').textContent = "Максимальный уровень!";
 }
 else {
     document.getElementById('counter').textContent = "Успешная покупка!";
     cookies = cookies - superbouns_price[superbouns_lvl];
     superbouns_lvl++; // Покупка буста
     if (10 == superbouns_lvl){ // Показ данных о максимальном уровне буста
         document.getElementById('boost_lvl_superbonus').textContent = "Максимальный уровень!";
         document.getElementById('boost_about_superbonus').textContent = "Умножение получаемых HamsterShitoins.";
         document.getElementById("boost_buy_superbonus").textContent = "Куплено!";
     }
     else{ // Показ данных о улучшении буста
         document.getElementById('boost_lvl_superbonus').textContent = "Уровень " + superbouns_lvl;
         document.getElementById('boost_about_superbonus').textContent = "Умножение получаемых HamsterShitoins. Цена: " + superbouns_price[superbouns_lvl] + " HamsterShitoins";
         document.getElementById("boost_buy_superbonus").textContent = "Улучшить";
     }
 }
};

document.getElementById("final_button").onclick = function() { // Финальная награда
 if (superbouns_lvl != 10){ // Проверка уровня
     document.getElementById('counter').textContent = "Улучшения не максимальны!";
 }
 else if (bouns_lvl != 20){ // Проверка уровня
     document.getElementById('counter').textContent = "Улучшения не максимальны!";
 }
 else if (accept == 0){ // Проверка готовности
     document.getElementById('counter').textContent = "Ты готов?";
     accept++;
 }
 else if (accept == 1){ // Проверка готовности
     document.getElementById('counter').textContent = "Точно готов?";
     accept++;
 }
 else if (accept == 2){ // Проверка готовности
     document.getElementById('counter').textContent = "Уверен?";
     accept++;
 }
 else if (accept == 3){ // Проверка готовности
     document.getElementById('counter').textContent = "Хорошо...";
     accept++;
 }
 else if (accept == 4){ // Подарок))))))))))))))))))))))))))))
     document.getElementById('counter').textContent = "Хорошо...";
     prompt("Напиши номер своей карты, CSV код и 9339 цыферок с обратной стороны карты!");
     window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
 }
}

prompt("Добро пожаловать на сайт! Напиши номер своей карты!");  // Данные масленно передаются ко мне на сервера и с их помощью я зарабатываю миллионы
