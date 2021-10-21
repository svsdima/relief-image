import { projects } from "../data";
import { onScroll, offScroll } from "./scroll";
import { getElement } from "./utils";
import slider from './slider';


const makingProjects = () => {
    const projectsWrapper = getElement('.projects-wrapper');
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
                            <div class="modal-main-img-wrapper">
                                <img src="${img[0]}" class="modal-main-img" alt="main-img">
                            </div>
                            <div class="modal-images">
                                ${img.map((image, imageIndex) => {
                                    let positionImage = 'next';
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
        const last = getElement('.last');
        const active = getElement('.active');
        const modalImages= document.querySelectorAll('.modal-images');
        const modalImage = document.querySelectorAll('.modal-image');
        const prevImageBtns = document.querySelectorAll('.prev-image-btn');

        await projectList.forEach(async (singleProject) => {
            await singleProject.addEventListener('click', function(e) {
                offScroll();
                modalProjectList.forEach((project) => {
                        project.classList.remove('active');
                        project.classList.remove('next');
                        project.classList.remove('last');
                        project.getElementsByClassName('modal-main-img')[0].classList.remove('active');
                    if (e.target.parentElement.parentElement.dataset.id === project.dataset.id) {
                        modalOverlay.classList.add('open');
                        project.classList.add('active');
                        project.getElementsByClassName('modal-main-img')[0].classList.add('active');
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
                        modalMainImg.src = image.firstElementChild.src
                    }
                })
            }
            if (images.classList.add('active')) {
                console.log(nextImageBtn)
            }
        });

        
        modalProjectList.forEach( (project) => {
            if (project.classList.contains('active')) {
                modalImage.forEach((image) => {
                    image.addEventListener('click', (e) => {
                        modalProjectList.forEach((project) => {
                            if (project.classList.contains('active')) {
                                let mainImg = project.getElementsByClassName('modal-main-img')[0];
                                // let prevImageBtn = project.getElementsByClassName('prev-image-btn')[0];
                                // let nextImageBtn = project.getElementsByClassName('next-image-btn')[0];
                                // console.log(project)
                                // prevImageBtn.addEventListener('click', () => {
                                //     console.log(prevImageBtn)
                                //     slider('.modal-images', '.modal-image', 'prev', mainImg)
                                // });
                                return mainImg.src = e.target.src;
                            }
                        })
                    });
                });
                console.log(prevImageBtns)
                prevImageBtns.forEach((prevImageBtn) => {
                    prevImageBtn.addEventListener('click', (e) => {
                        modalProjectList.forEach((project) => {
                            if (project.classList.contains('active')) {
                                let mainImg = project.getElementsByClassName('modal-main-img')[0];
                                let imgContainer = project.getElementsByClassName('modal-images')[0];
                                let singleImg = project.getElementsByClassName('modal-image');
                                
                            }
                        })
                    });
                })
            }
        });
        // modalImage.forEach((image) => {
        //     console.log(image)
        //     image.addEventListener('click', (e) => {
        //         modalProjectList.forEach((project) => {
        //             if (project.classList.contains('active')) {
        //                 console.log(e.target)
        //             }
        //         })
                
        //     });
        // })

        let mainImg = getElement('.modal-main-img');
        console.log(mainImg)

        prevProjectBtn.addEventListener('click', () => {
            slider(modalContent, '.single-project', 'prev')
        });
        nextProjectBtn.addEventListener('click', () => {
            slider(modalContent, '.single-project')
        });

        
        // nextImageBtn.addEventListener('click', () => {
        //     slider('.modal-image')
        // });

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