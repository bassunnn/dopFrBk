function task1() {
  let userName = prompt("Введите ваше имя:");
  let userAge = Number(prompt("Введите ваш возраст:"));
  let message = "Привет, " + userName + "! Тебе " + userAge + " лет.";
  alert(message);
  console.log(message);
}

function task2() {
  let userName = prompt("Введите ваше имя:");
  let userAge = Number(prompt("Введите ваш возраст:"));
  let message = "Привет, " + userName + "! Тебе " + userAge + " лет.";
  let result = userAge >= 18 ? "Вы совершеннолетний" : "Вы несовершеннолетний";
  alert(message);
  console.log(message);
  alert(result);
  console.log(result);
}

function task3() {
  let n = Math.floor(Math.random() * 10) + 1;
  let x = prompt("Угадайте число от 1 до 10:");
  while (x !== null) {
    x = Number(x);
    if (x === n) {
      alert("Поздравляем! Вы угадали число!");
      console.log("Поздравляем! Вы угадали число!");
      return;
    }
    let message = x < n ? "Загаданное число больше" : "Загаданное число меньше";
    alert(message);
    console.log(message);
    x = prompt("Угадайте число от 1 до 10:");
  }
}

function task4() {
  const password = "12345";
  let x = prompt("Введите пароль:");
  let message = !x ? "Пароль не введён" : x === password ? "Доступ разрешен" : "Доступ запрещен";
  alert(message);
  console.log(message);
}

function task5() {
  let a = Number(prompt("Введите первое число:"));
  let b = Number(prompt("Введите второе число:"));
  let op = prompt("Введите оператор (+, -, *, /):");
  let result;
  if (op === "+") result = a + b;
  else if (op === "-") result = a - b;
  else if (op === "*") result = a * b;
  else if (op === "/") result = b === 0 ? "На ноль делить нельзя" : a / b;
  else result = "Неверный оператор";
  alert(result);
  console.log(result);
}
