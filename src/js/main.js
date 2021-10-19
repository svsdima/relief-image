import projects from "./data";
import { getElement } from './utils';
import './toggleSidebar.js';
import { createProject, modalProject, projectEvent } from './projects';
import { singleProject, ModalProject } from './createModal';
import makingProjects from './projects';
import { scroll, onScroll, offScroll} from './scroll';



window.addEventListener('DOMContentLoaded', () => {
    scroll();
    makingProjects();
    // projectEvent();
    // singleProject();
    // const modal = new ModalProject(getElement('.about-projects'))
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


});