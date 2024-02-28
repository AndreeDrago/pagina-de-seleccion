let izquierda = document.querySelector('.izquierda');
let derecha = document.querySelector('.derecha');
let menu = document.querySelector('.menu');

izquierda.addEventListener('mouseenter', () => menu.classList.add('hover-left'));
izquierda.addEventListener('mouseleave', () => menu.classList.remove('hover-left'));

derecha.addEventListener('mouseenter', () => menu.classList.add('hover-right'));
derecha.addEventListener('mouseleave', () => menu.classList.remove('hover-right'));