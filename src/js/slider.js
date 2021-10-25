import { getElement } from "./utils";

const slider = (container, mainClass, typeBtn) => {
    let active = getElement(`${mainClass}.active`);
    let last = getElement(`${mainClass}.last`);
    let next = active.nextElementSibling;
    if (!next) {
        next = container.firstElementChild;
    }
    active.classList.remove(['active']);
    last.classList.remove(['last']);
    next.classList.remove(['next']);

    if (typeBtn === 'prev') {
        active.classList.add('next');
        last.classList.add('active');
        next = last.previousElementSibling;
        if (!next) {
            next = container.lastElementChild;
        }
        next.classList.remove(['next']);
        next.classList.add('last');
        return;
    }
    active.classList.add('last');
    last.classList.add('next');
    next.classList.add('active');
}

export default slider;