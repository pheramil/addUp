document.getElementById('runButton').addEventListener('click', addUp());

function addUp() {
    let userInput = Number(document.getElementById('input').value);
    let answer = 0;

    for (let i = 0; i <= userInput; i++) {
        answer += i;
    }
    
    document.getElementById('prompt').textContent = `The increment is ${answer}`;
}
