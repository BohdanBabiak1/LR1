let names = []
let name = prompt("Введіть кількість студентів в групі: ")
for (let i=0; i<name; i++){
    names.push(prompt(`Введіть ім'я та прізвище ${i+1}-го студента: `))
}
for (let i=0; i<names.length; i++){
    document.write(names[i] + '<br>')
}