import { getElement } from './utils';
import { onScroll, offScroll} from './scroll';

const popup = () => {
    /* PopupToggle */
    const openPopup = getElement('.btn-popup');
    const popup = getElement('.popup');
    const closePopup = getElement('.popup-wrapper .close-btn');

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('open');
        }
    })

    openPopup.addEventListener('click', () => {
        popup.classList.add('open');
        offScroll();
    });

    closePopup.addEventListener('click', () => {
        popup.classList.remove('open');
        onScroll();
    });
};

export default popup;