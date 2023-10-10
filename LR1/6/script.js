let studentNames = []
let i = 1

while (true) {
    studentName = prompt(`Введіть прізвище та ім'я ${i}-го студента: `)
    if (studentName === null) {
        break;
    }

    if (/^\p{Lu}\p{L}*\s\p{Lu}\p{L}*$/u.test(studentName)){
        studentNames.push(studentName);
        i += 1
    }
    else{
        alert("Введіть правильне прізвище та ім'я (два слова, кожне з великої літери, розділені пробілом).")
    }
}

studentNames.forEach(element => {
    document.write(element + "<br>")
});
