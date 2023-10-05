var month = prompt("Введіть цифру місяця: ");

if (month >= 1 && month <= 2 || month === 12) {
  alert("Зима");
} else if (month >= 3 && month <= 5) {
  alert("Весна");
} else if (month >= 6 && month <= 8) {
  alert("Літо");
} else if (month >= 9 && month <= 11) {
  alert("Осінь");
} else {
  alert("Неравильне число місяця. Введіть число від 1 до 12.");
}
