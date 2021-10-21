import { getElement } from "./utils.js";
import { projects } from "../data.js";

const projectWrapper = document.querySelector('.projects-wrapper');

const singleProject = () => {
    let id = 1;
    const project = projects.map((project) => {
        project.id = id++;
        return project.innerHTML = `
        <div class="project" data-id='${project.id}'>
            <div class="project-img">
                <img src=${project.img[0]}>
            </div>
            <div>
                <span>${project.name}</span>
            </div>
        </div>
        `;
    }).join("");
    projectWrapper.innerHTML = project;
}

function ModalProject(element) {
    this.container = element;
    this.list = [...projects];
    this.modalProject = getElement('.modal-overlay');
    this.projectImg = getElement('.modal-main-img');
    this.projectInfo = getElement('.modal-content');
    this.projectName = getElement('.project span');
    this.projectList = getElement('.modal-info-list');
    this.projectPrice = getElement('.modal-price');
    this.closeBtn = getElement('.close-btn');
    this.nextProject = getElement('.next-project-btn');
    this.prevProject = getElement('.prev-project-btn');

    // this.closeProject = this.closeProject.bind(this);


    // container event
    this.container.addEventListener('click', function(e) {
        if (
            e.target.parentElement.parentElement.classList.contains('project')
            || e.target.parentElement.classList.contains('project')
            ) {
            this.openModal(e.target, this.list)
        }
    }.bind(this));
    // console.log(this.container)
}

ModalProject.prototype.openModal = function(selectedProject, list) {
    // this.setMainImage(selectedProject);
    let id = 1;
    this.projectInfo.innerHTML = list.map((project, projectIndex) => {
        project.id = id++;
        const { name, img, list, price } = project;
        let position = 'next';
        if (projectIndex === 0) {
            position = 'active';
        }
        if (projectIndex === projects.length - 1) {
            position = 'last';
        }
        return `
            <div class="single-project ${position}" data-id='${project.id}'>
                <div class="line orange"><span class="line-name">${name}</span> <span class="line-full"></span></div>
                    <div class="modal-wrapper">
                        <div class="modal-img-wrapper">
                            <img src="${img[0]}" class="modal-main-img" alt="main-img">
                            <div class="modal-images">
                                ${img.map((image, imageIndex) => `
                                <div class="modal-main-img" data-id="${imageIndex}">
                                    <img src="${image}" alt="${image}">
                                </div>
                                `).join("")}

                            </div>
                    </div>
                    <div class="modal-info">
                        <h3 class="modal-info-title">${name}</h3>
                        <ul class="modal-info-list">
                            ${list.map((e) => `<li>${e}</li>`).join("")}
                        </ul>
                        <p>Сумма: <span class="modal-price">${price}</span> рублей</p>
                    </div>
                </div>
            </div>
        `;
    }).join("")
    this.modalProject.classList.add('open');
    // this.closeProject.addEventListener('click', this.closeProject);
}

ModalProject.prototype.setMainImage = function(selectedImage) {
    this.projectImg.src = selectedImage.src;
    this.projectName.textContent = selectedImage.title;
}




export  { singleProject, ModalProject };