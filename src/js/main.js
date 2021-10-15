import projects from "./data";
import { getElement } from './utils';
import './toggleSidebar.js';
import { createProject, modalProject, projectEvent } from './projects';
import { singleProject, ModalProject } from './createModal';
import makingProjects from './projects';

window.addEventListener('DOMContentLoaded', () => {
    makingProjects();
    // projectEvent();
    // const modal = new ModalProject(getElement('.about-projects'))
});