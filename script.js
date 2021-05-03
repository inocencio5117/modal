const modalClose = document.querySelector('.close-btn')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('#overlay');

document.addEventListener('click', e => {
    const el = e.target;

    if (el.classList.contains('open-m')) {
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    if (el.classList.contains('close-btn')) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
})

overlay.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('overlay')) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
})
