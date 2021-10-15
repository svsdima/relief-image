import projects from "./data";
import { getElement } from "./utils";


const makingProjects = () => {
    const projectsWrapper = getElement('.about-projects');
    const modalContent = getElement('.modal-content');
    const modalOverlay = getElement('.modal-overlay');

    const createProject = async (projects) => {
        let id = 1;
        const project = await projects.map((project) => {
            project.id = id++;
            return `
                <div class="project" data-id='${project.id}'>
                    <div class="project-img">
                        <img src="${project.img[0]}" alt="${project.name}">
                    </div>
                    <div>
                        <span>${project.name}</span>
                    </div>
                </div>
            `;
        }).join("");
        projectsWrapper.innerHTML = project;
    }

    const modalProject = async (projects) => {
        let position = 'next';


        modalContent.innerHTML = await projects.map((project, projectIndex) => {
            const { name, img, list, price } = project;
            position = 'next';
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
                                ${img.map((image, imageIndex) => `<img src="${image}" class="modal-main-img" data-id="${imageIndex}" alt="${image}">`).join("")}

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
        }).join("");

        const projectList = document.querySelectorAll('.project');
        const modalProjectList = document.querySelectorAll('.single-project');
        const closeBtn = getElement('.close-btn');
        const nextProjectBtn = getElement('.next-project-btn');
        const prevProjectBtn = getElement('.prev-project-btn');
        const last = getElement('.last');
        const active = getElement('.active');

        await projectList.forEach((singleProject, typeBtn) => {
            singleProject.addEventListener('click', function(e) {
                let number = modalProjectList.forEach((project, numberIndex) => {
                        project.classList.remove('active');
                        project.classList.remove('next');
                        project.classList.remove('last');
                    if (e.target.parentElement.parentElement.dataset.id - 1 === numberIndex) {
                        project.classList.add('active');
                    }

                    console.log(`Previous element ${project.previousElementSibling}`)
                    // next.classList.add('next');
                });
                modalOverlay.classList.add('open');
            });
        });

        const sliderProject = (typeBtn) => {
            let active = document.querySelector('.active');
            let last = document.querySelector('.last');
            let next = active.nextElementSibling;
            if (!next) {
                next = modalContent.firstElementChild;
            }
            active.classList.remove(['active']);
            last.classList.remove(['last']);
            next.classList.remove(['next']);

            if (typeBtn === 'prev') {
                active.classList.add('next');
                last.classList.add('active');
                next = last.previousElementSibling;
                if (!next) {
                    next = modalContent.lastElementChild;
                }
                next.classList.remove(['next']);
                next.classList.add('last');
                return;
            }
            active.classList.add('last');
            last.classList.add('next');
            next.classList.add('active');
        }

        prevProjectBtn.addEventListener('click', () => {
            console.log('prev')
            sliderProject('prev')
        })
        nextProjectBtn.addEventListener('click', () => {
            console.log('next')
            sliderProject()
        })


        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('open');
        });
    };

    const projectEvent = () => {
        
    }

    createProject(projects);
    modalProject(projects);
};

export default makingProjects;