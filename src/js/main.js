import { projects } from "../data";
import './toggleSidebar.js';
import { createProject, modalProject, projectEvent } from './projects';
import { singleProject, ModalProject } from './createModal';
import makingProjects from './projects';
import { scroll } from './scroll';
import garden from "./garden";
import landscapeList from './landscape';
import popup from "./popup";
import reviewsSection from './reviews';
import { getElement } from './utils';

window.addEventListener('DOMContentLoaded', () => {
    popup();
    scroll();
    makingProjects();
    // projectEvent();
    // singleProject();
    // const modal = new ModalProject(getElement('.about-projects'))

    garden();
    landscapeList();
    reviewsSection();

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
});