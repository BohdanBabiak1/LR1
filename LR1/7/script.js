for (let i = 2; i <= 9; i++) {
    document.write("<tr>");
    document.write(`<th>${i}</th>`); 
    for (let j = 2; j <= 9; j++) {
        let result = i * j;
        document.write(`<td>${result}</td>`);
    }
    document.write("</tr>");
}