import { getElement } from './utils';

const hideText = () => {
    const btnDescr = getElement('.section-descr .btn-descr');
    const hideText = getElement('.section-descr .hide-text');

    if (window.screen.width > 800) {
        hideText.classList.remove('close');
        hideText.classList.add('open');
    }
    if (window.screen.width <= 800) {
        hideText.classList.remove('open');
        hideText.classList.add('close');

    }

    btnDescr.addEventListener('click', () => {
        if (hideText.classList.contains('close')) {
            hideText.classList.remove('close');
            hideText.classList.add('open');
            btnDescr.innerHTML = `
                <i class="fas fa-chevron-up"></i>
            `;
        } else if (hideText.classList.contains('open')) {
            hideText.classList.remove('open');
            hideText.classList.add('close');
            btnDescr.innerHTML = `
                <i class="fas fa-chevron-down"></i>
            `;
        }
    });
};

export default hideText;