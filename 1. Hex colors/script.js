function changColor() {
    const hex_numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let hex_code = ''
    for(let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hex_numbers.length)
        hex_code += hex_numbers[index]
    }    
    document.querySelector('.hex-color h2 span').innerHTML = hex_code;
    document.querySelector('body').style.backgroundColor = `#${hex_code}`;
}

document.querySelector('.btn').addEventListener('click', changColor)

