
const text = document.querySelector('#my-textarea');
const result = document.querySelector('.result span');
const parts = document.querySelector('.parts span');

text.addEventListener('input', (e) => {
    result.textContent = e.target.value.length;


    if (e.target.value.length < 60 && e.target.value.length > 40) {
        result.style.color = '#ffd400';
    }

    if (e.target.value.length > 60) {
        result.style.color = 'green';
    }

    if (e.target.value.length > 80) {
        result.style.color = 'red';
    }

    if (e.target.value.length > 70) {
        parts.textContent = 2;
    }

    if (e.target.value.length < 71) {
        parts.textContent = 1;
    }

    if (e.target.value.length > 140) {
        let calc = (e.target.value.length / 70) + 1;

        parts.textContent = calc.toFixed(); 
    }
})