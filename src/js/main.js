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
import hideText from './hideText';

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
    hideText();
    
});