// 느린 카운터를 만듭니다.
const counter = document.getElementById('counter');
const btn = document.getElementById('btn');
const message = document.getElementById('message')

let click = 0

const slowCounter = () => {
    const curClick = ++click;
    click = parseInt(click, 10) 
    counter.innerText = click
    message.innerHTML += `${curClick}. 현재 값은... ${0}<br>`;

    window.setTimeout(()=>{
        message.innerHTML += `${curClick}. 더한 값은... ${0}<br>`;
    }, 3000);
}

btn.addEventListener('click', slowCounter);