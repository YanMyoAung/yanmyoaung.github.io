function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("menu-bar").classList.toggle("menu-bar-margin");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("nav").classList.toggle("nav-margin");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

const circle_txt = "S T A R T  Y O U R   J O U R N E Y";
const circle_block = document.getElementById("circle_text");
window.onload = () => {
    for (let i = 0; i < circle_txt.length; i++) {
        let span = document.createElement("span");
        span.innerHTML = circle_txt[i];
        span.classList.add('circle_text');
        circle_block.appendChild(span);
        span.style.transform = `rotate(${-100 + (10 * i)}deg)`;
        if (i === 0 || i === 11 || i === 21) {
            span.style.color = '#e60576';
            span.style.fontSize = '11px';
        }
    }
}