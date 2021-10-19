/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/createModal.js":
/*!*******************************!*\
  !*** ./src/js/createModal.js ***!
  \*******************************/
/*! exports provided: singleProject, ModalProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleProject", function() { return singleProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProject", function() { return ModalProject; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/js/data.js");


const projectWrapper = document.querySelector('.about-projects');

const singleProject = () => {
  let id = 1;
  const project = _data_js__WEBPACK_IMPORTED_MODULE_1__["default"].map(project => {
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
};

function ModalProject(element) {
  this.container = element;
  this.list = [..._data_js__WEBPACK_IMPORTED_MODULE_1__["default"]];
  this.modalProject = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-overlay');
  this.projectImg = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-main-img');
  this.projectInfo = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-content');
  this.projectName = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.project span');
  this.projectList = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-info-list');
  this.projectPrice = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-price');
  this.closeBtn = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.close-btn');
  this.nextProject = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.next-project-btn');
  this.prevProject = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.prev-project-btn'); // this.closeProject = this.closeProject.bind(this);
  // container event

  this.container.addEventListener('click', function (e) {
    if (e.target.parentElement.parentElement.classList.contains('project') || e.target.parentElement.classList.contains('project')) {
      this.openModal(e.target, this.list);
    }
  }.bind(this)); // console.log(this.container)
}

ModalProject.prototype.openModal = function (selectedProject, list) {
  // this.setMainImage(selectedProject);
  let id = 1;
  this.projectInfo.innerHTML = list.map((project, projectIndex) => {
    project.id = id++;
    const {
      name,
      img,
      list,
      price
    } = project;
    let position = 'next';

    if (projectIndex === 0) {
      position = 'active';
    }

    if (projectIndex === _data_js__WEBPACK_IMPORTED_MODULE_1__["default"].length - 1) {
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
                            ${list.map(e => `<li>${e}</li>`).join("")}
                        </ul>
                        <p>Сумма: <span class="modal-price">${price}</span> рублей</p>
                    </div>
                </div>
            </div>
        `;
  }).join("");
  this.modalProject.classList.add('open'); // this.closeProject.addEventListener('click', this.closeProject);
};

ModalProject.prototype.setMainImage = function (selectedImage) {
  this.projectImg.src = selectedImage.src;
  this.projectName.textContent = selectedImage.title;
};



/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const projects = [{
  name: 'Правдинское',
  img: ['img/projects/pravdinsk/1.jpg', 'img/projects/pravdinsk/2.jpg', 'img/projects/pravdinsk/3.jpg', 'img/projects/pravdinsk/4.jpg'],
  list: ['Черновая планировка и уборка мусора', 'Планировка территории на плоскости', 'Устройство рокария', 'Посадка плодовых и ягодных деревьев и кустарников', 'Подготовка участка под рулонный газон', 'Отсевная площадка под грядки', 'Устройство экопарковки', 'Установка грядок', 'Установка теплицы', 'Укладка рулонного газона'],
  price: '1 400 000'
}, {
  name: 'Петергоф',
  img: ['img/projects/petergof/1.jpg', 'img/projects/petergof/2.jpg', 'img/projects/petergof/3.jpg', 'img/projects/petergof/4.jpg'],
  list: ['Обустройство и укрепление дренажной канавы', 'Посадка растений', 'Укладка рулонного газона'],
  price: '185 000'
}, {
  name: 'Репино',
  img: ['img/projects/repino/1.jpg', 'img/projects/repino/2.jpg', 'img/projects/repino/3.jpg', 'img/projects/repino/4.jpg'],
  list: ['Ландшафтное проектирование участка', 'Планировка территории на плоскости', 'Создание дренажной системы', 'Устройство дорожного покрытия', 'Устройство рокария', 'Посадка цветника и живой изгороди'],
  price: '400 000'
}];
/* harmony default export */ __webpack_exports__["default"] = (projects);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _toggleSidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleSidebar.js */ "./src/js/toggleSidebar.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/js/projects.js");
/* harmony import */ var _createModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createModal */ "./src/js/createModal.js");






window.addEventListener('DOMContentLoaded', () => {
  Object(_projects__WEBPACK_IMPORTED_MODULE_3__["default"])(); // projectEvent();
  // singleProject();
  // const modal = new ModalProject(getElement('.about-projects'))

  /* PopupToggle */

  const openPopup = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.btn-popup');
  const popup = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.popup');
  const closePopup = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.popup-wrapper .close-btn');
  openPopup.addEventListener('click', () => {
    popup.classList.add('open');
  });
  closePopup.addEventListener('click', () => {
    popup.classList.remove('open');
  });
  /* Scroll */

  const navbar = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.navbar');
  const linksContainer = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.links-container');
  const links = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.nav-links');
  const topLink = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.top-link');
  const navToggle = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.nav-toggle');
  const header = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.header');
  navToggle.addEventListener('click', () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
      linksContainer.style.height = `${linksHeight}px`;
    } else {
      linksContainer.style.height = 0;
    }
  }); // ***Fixed navbar***

  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
      navbar.classList.add('fixed-nav');
    } else {
      navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 600) {
      topLink.classList.add('show-link');
      header.style.paddingTop = `${navHeight}px`;
    } else {
      topLink.classList.remove('show-link');
    }
  }); // ***Smoth Scroll***

  const scrollLinks = document.querySelectorAll('.nav-link');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // navigate to specific spot

      const id = e.currentTarget.getAttribute('href').slice(1);
      const element = document.getElementById(id); // calculate the hights

      const navHeight = navbar.getBoundingClientRect().height;
      const containerHeight = linksContainer.getBoundingClientRect().height;
      const fixedNav = navbar.classList.contains('fixed-nav');
      let position = element.offsetTop - navHeight;

      if (!fixedNav) {
        position = position - navHeight;
      }

      if (navHeight > 82) {
        position = position + containerHeight;
      }

      window.scrollTo({
        left: 0,
        top: position
      }); // linksContainer.style.height = 0;
    });
  });
});

/***/ }),

/***/ "./src/js/projects.js":
/*!****************************!*\
  !*** ./src/js/projects.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");



const makingProjects = () => {
  const projectsWrapper = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.about-projects');
  const modalContent = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.modal-content');
  const modalOverlay = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.modal-overlay');

  const createProject = async projects => {
    let id = 1;
    const project = await projects.map(project => {
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
  };

  const modalProject = async projects => {
    let positionProject = 'next';
    let positionImage = 'next';
    let id = 1;
    modalContent.innerHTML = await projects.map((project, projectIndex) => {
      project.id = id++;
      const {
        name,
        img,
        list,
        price
      } = project;
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
                                ${list.map(e => `<li>${e}</li>`).join("")}
                            </ul>
                            <p>Сумма: <span class="modal-price">${price}</span> рублей</p>
                        </div>
                    </div>
                </div>
            `;
    }).join("");
    const projectList = document.querySelectorAll('.project');
    const modalProjectList = document.querySelectorAll('.single-project');
    const closeBtn = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.modal-overlay .close-btn');
    const nextProjectBtn = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.next-project-btn');
    const prevProjectBtn = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.prev-project-btn');
    const nextImageBtn = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.next-image-btn');
    const prevImageBtn = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.prev-image-btn');
    const last = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.last');
    const active = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.active');
    const modalImages = document.querySelectorAll('.modal-images');
    const modalImage = document.querySelectorAll('.modal-image');
    const modalMainImg = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.modal-main-img');
    await projectList.forEach(async singleProject => {
      await singleProject.addEventListener('click', function (e) {
        modalProjectList.forEach(project => {
          project.classList.remove('active');
          project.classList.remove('next');
          project.classList.remove('last');

          if (e.target.parentElement.parentElement.dataset.id === project.dataset.id) {
            console.log(project.dataset.id);
            modalOverlay.classList.add('open');
            project.classList.add('active');
          }

          if (e.target.parentElement.parentElement.dataset.id == 1) {
            modalContent.lastElementChild.classList.add('last');
          }

          if (e.target.parentElement.parentElement.dataset.id > 1 && e.target.parentElement.parentElement.dataset.id === project.dataset.id) {
            project.previousElementSibling.classList.add('last');
          }
        });
      });
    });
    modalImages.forEach(images => {
      if (images.classList.contains('active')) {
        let img = [...images.getElementsByClassName('modal-image')];
        img.forEach(image => {
          if (image.classList.contains('active')) {
            console.log(modalMainImg.src, image.firstElementChild.src);
            modalMainImg.src = image.firstElementChild.src;
            console.log(modalMainImg.src, image.firstElementChild.src);
          }
        });
      }

      if (images.classList.add('active')) {
        console.log(nextImageBtn);
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
    };

    prevProjectBtn.addEventListener('click', () => {
      sliderProject('.single-project', 'prev');
    });
    nextProjectBtn.addEventListener('click', () => {
      sliderProject('.single-project');
    });
    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('open');
    });
  };

  const projectEvent = () => {};

  createProject(_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
  modalProject(_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (makingProjects);

/***/ }),

/***/ "./src/js/toggleSidebar.js":
/*!*********************************!*\
  !*** ./src/js/toggleSidebar.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");

const modalProject = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-overlay');
const closeProjectBtn = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-projects .close-btn');
closeProjectBtn.addEventListener('click', () => {
  modalProject.classList.remove('open');
});

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: getElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return getElement; });
const getElement = selection => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`Please check "${selection}" selector, no such element exist`);
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map