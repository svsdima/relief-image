import { getElement } from "./utils.js";
import projects from "./data.js";

const projectWrapper = document.querySelector('.about-projects');

const singleProject = () => {
    let id = 1;
    const project = projects.map((project) => {
        project.id = id++;
        return project.innerHTML = `
        <div class="project" data-id='${project.id}'>
            <div class="project-img">
                <img src=${project.img[0]}>
            </div>
            <span>${project.name}</span>
        </div>
        `;
    }).join("");
    projectWrapper.innerHTML = project;
}

function ModalProject(element) {
    this.container = element;
    this.list = [...element.querySelectorAll('.project')];
    this.modalProject = getElement('.modal-overlay');
    this.projectImg = getElement('.modal-main-img');
    this.projectImages = getElement('.modal-images');
    this.projectName = getElement('.modal-info-title');
    this.projectList = getElement('.modal-info-list');
    this.projectPrice = getElement('.modal-price');
    this.closeProject = getElement('.close-btn');
    this.nextImage = getElement('.next-btn');
    this.prevImage = getElement('.prev-btn');

    // container event
    this.container.addEventListener('click', function(e) {
        if (e.target.classList.contains('project')) {
            console.log(e.target, this.list);
        }
    }.bind(this));
    console.log(this.container)
}

ModalProject.prototype.openModal = function(selectedProject, list) {
    
}


const modalProject = () => {

}

export  { singleProject, modalProject, ModalProject };