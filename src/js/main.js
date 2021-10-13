import { getElement } from './utils';
import './toggleSidebar.js';
import { singleProject, modalProject, ModalProject } from './createModal.js';

window.addEventListener('load', () => {
    singleProject();
    const DarkProject = new ModalProject(getElement('.about-projects'));
});