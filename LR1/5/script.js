let names = []
let subnames = []

while (true) {
  count = prompt("Введіть кількість студентів в групі: ")

  if (Number.isInteger(+count) && count != "") {
    break
  } else {
    alert("Будь ласка, введіть ціле число.")
  }
}

for (let i=0; i<count; i++){
  while (true) {
    name_ = (prompt(`Введіть ім'я ${i+1}-го студента: `))
    if (/\s/.test(name_) || /\d/.test(name_) || /^[^\p{Lu}]./u.test(name_) || name_==''){
      alert("Ім'я написано не коректно (містить пробіли, цифри або перша буква не є великою)")
    }
    else{ 
      names.push(name_)
      break 
    }
  }
    
  while (true) {
    subname = (prompt(`Введіть прізвище ${i+1}-го студента: `))
    if (/\s/.test(subname) || /\d/.test(subname) || /^[^\p{Lu}]./u.test(subname) || subname==''){
      alert("Прізвище написано не коректно (містить пробіли, цифри або перша буква не є великою)")
    }
    else{ 
      subnames.push(subname)
      break 
    }
  }
}
for (let i=0; i<names.length; i++){
    document.write(names[i] + " " + subnames[i] + "<br>")
}
