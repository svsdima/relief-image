import { projects } from "../data";
import { onScroll, offScroll } from "./scroll";
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
        let positionProject = 'next';
        let positionImage = 'next';
        let id = 1;

        modalContent.innerHTML = await projects.map((project, projectIndex) => {
            project.id = id++;
            const { name, img, list, price } = project;
            positionProject = 'next';
            if (projectIndex === 0) {
                positionProject = 'active';
            }
            if (projectIndex === projects.length - 1) {
                positionProject = 'last';
            }
            return `
                <div class="single-project ${positionProject}" data-id=${project.id}>
                    <div class="line orange"><span class="line-name">${name}</span> <span class="line-full"></span></div>
                    <div class="modal-wrapper">
                        <div class="modal-img-wrapper">
                            <img src="${img[0]}" class="modal-main-img" alt="main-img">
                            <div class="modal-images">
                                ${img.map((image, imageIndex) => {
                                    positionImage = 'next';
                                    if (imageIndex === 1) {
                                        positionImage = 'active';
                                    }
                                    if (imageIndex === projects.length - 1) {
                                        positionImage = 'last';
                                    }
                                    return `
                                        <div class="modal-image ${positionImage}" data-id="${project.id}${imageIndex + 1}" >
                                            <img src="${image}" alt="${image}">
                                        </div>
                                    `;
                                }).join("")}
                                <button class="prev-image-btn">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button class="next-image-btn">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
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
        const closeBtn = getElement('.modal-overlay .close-btn');
        const nextProjectBtn = getElement('.next-project-btn');
        const prevProjectBtn = getElement('.prev-project-btn');
        const nextImageBtn = getElement('.next-image-btn');
        const prevImageBtn = getElement('.prev-image-btn');
        const last = getElement('.last');
        const active = getElement('.active');
        const modalImages= document.querySelectorAll('.modal-images');
        const modalImage = document.querySelectorAll('.modal-image');
        const modalMainImg = getElement('.modal-main-img');

        await projectList.forEach(async (singleProject) => {
            await singleProject.addEventListener('click', function(e) {
                offScroll();
                modalProjectList.forEach((project) => {
                        project.classList.remove('active');
                        project.classList.remove('next');
                        project.classList.remove('last');
                    if (e.target.parentElement.parentElement.dataset.id === project.dataset.id) {
                        console.log(project.dataset.id)
                        modalOverlay.classList.add('open');
                        project.classList.add('active');
                    }
                    if (e.target.parentElement.parentElement.dataset.id == 1) {
                        modalContent.lastElementChild.classList.add('last')
                    }
                    if (e.target.parentElement.parentElement.dataset.id > 1 && e.target.parentElement.parentElement.dataset.id === project.dataset.id) {
                        project.previousElementSibling.classList.add('last');
                    }
                });
            });
        });

        modalImages.forEach((images) => {
            if (images.classList.contains('active')) {
                let img = [...images.getElementsByClassName('modal-image')];
                img.forEach((image) => {
                    if (image.classList.contains('active')) {
                        console.log(modalMainImg.src, image.firstElementChild.src);
                        modalMainImg.src = image.firstElementChild.src
                        console.log(modalMainImg.src, image.firstElementChild.src);
                    }
                })
            }
            if (images.classList.add('active')) {
                console.log(nextImageBtn)
            }
            nextImageBtn.addEventListener('click', () => {
                console.log(nextImageBtn);
                console.log('modal-image');
            });
        });

        const sliderProject = (mainClass, typeBtn) => {
            let active = document.querySelector(`${mainClass}.active`);
            let last = document.querySelector(`${mainClass}.last`);
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
            sliderProject('.single-project', 'prev')
        });
        nextProjectBtn.addEventListener('click', () => {
            sliderProject('.single-project')
        });


        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('open');
            onScroll();
        });
    };

    const projectEvent = () => {
        
    }

    createProject(projects);
    modalProject(projects);
};

export default makingProjects;