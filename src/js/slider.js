import { getElement } from "./utils";

const slider = (container, activeClass, lastClass, typeBtn, mainImg) => {
    let active = activeClass;
    let last = lastClass;
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
        if (mainImg) {
            mainImg.src = last.children[0].src;
        }     
        return;
    }
    
    active.classList.add('last');
    last.classList.add('next');
    next.classList.add('active');

    if (mainImg) {
        mainImg.src = next.children[0].src;
    } 
}

export default slider;