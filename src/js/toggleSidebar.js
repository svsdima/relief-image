import { getElement } from './utils.js';

const modalProject = getElement('.modal-overlay');
const closeProjectBtn = getElement('.modal-projects .close-btn');

closeProjectBtn.addEventListener('click', () => {
    modalProject.classList.remove('open');
});