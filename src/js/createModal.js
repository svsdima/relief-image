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
    this.nextProject = getElement('.next-btn');
    this.prevProject = getElement('.prev-btn');

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

    this.projectInfo.innerHTML = list.map((project, projectIndex) => {
        const { name, img, list, price } = project;
        let position = 'next';
        if (projectIndex === 0) {
            position = 'active';
        }
        if (projectIndex === projects.length - 1) {
            position = 'last';
        }
        return `
            <div class="single-project ${position}">
                <div class="line orange"><span class="line-name">${name}</span> <span class="line-full"></span></div>
                <div class="modal-wrapper">
                    <div class="modal-img-wrapper">
                        <img src="${img[0]}" class="modal-main-img" alt="main-img">
                        <div class="modal-images">
                            <img src="./img/projects/pravdinsk/1.jpg" class="modal-main-img" data-id="2" alt="main-img">
                            <img src="./img/projects/pravdinsk/1.jpg" class="modal-main-img" data-id="3" alt="main-img">
                            <img src="./img/projects/pravdinsk/1.jpg" class="modal-main-img" data-id="4" alt="main-img">
                        </div>
                    </div>
                    <div class="modal-info">
                        <h3 class="modal-info-title">Правдинское</h3>
                        <ul class="modal-info-list">
                            <li>Ландшафтное проектирование участка</li>
                            <li>Планировка территории на плоскости</li>
                            <li>Создание дренажной системы</li>
                            <li>Устройство дорожного покрытия</li>
                            <li>Устройство рокария</li>
                            <li>Посадка цветника и живой изгороди</li>
                        </ul>
                        <p>Сумма: <span class="modal-price">400 000</span> рублей</p>
                    </div>
                </div>
            </div>
        `;
    })
    this.modalProject.classList.add('open');
    // this.closeProject.addEventListener('click', this.closeProject);
}

ModalProject.prototype.setMainImage = function(selectedImage) {
    this.projectImg.src = selectedImage.src;
    this.projectName.textContent = selectedImage.title;
}




export  { singleProject, ModalProject };