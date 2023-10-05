const studentNames = []
while (true) {
    const fullName = prompt(`Введіть прізвище та ім'я студента:`)
    if (fullName === null) {
        break;
    }
    studentNames.push(fullName);
}

studentNames.forEach(element => {
    document.write(element + "<br>")
});
