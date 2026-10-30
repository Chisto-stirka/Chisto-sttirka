// proxy.js
// Этот файл лежит на твоём сайте (GitHub Pages).
// Он принимает данные от формы и пересылает их в Google Apps Script.

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwCcK3U7pm85iudgbvR3y4Ulh1Gzy_-y-i9Rs-zDwCR5x7DGD-Mqr5RqYFoYuJ7GdJx3g/exec'; // <-- ВСТАВИТЬ СЮДА!

exports.handler = async (event) => {
  // Это для Netlify Functions, но для простоты на GitHub мы сделаем хитрость ниже
  return { statusCode: 405, body: 'Method not allowed' };
};

// ДЛЯ GITHUB PAGES (так как тут нет серверных функций) мы используем хитрость:
// Мы не можем запустить этот JS на сервере GitHub. 
// Поэтому мы НЕ будем использовать этот файл как серверный код.
// Прости, я запутала тебя сложным вариантом. Давай сделаем СУПЕР-ПРОСТОЙ вариант без прокси-файлов.
