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
/*! exports provided: singleProject, modalProject, ModalProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleProject", function() { return singleProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalProject", function() { return modalProject; });
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
            <span>${project.name}</span>
        </div>
        `;
  }).join("");
  projectWrapper.innerHTML = project;
};

function ModalProject(element) {
  this.container = element;
  this.list = [...element.querySelectorAll('.project')];
  this.modalProject = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-overlay');
  this.projectImg = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-main-img');
  this.projectImages = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-images');
  this.projectName = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-info-title');
  this.projectList = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-info-list');
  this.projectPrice = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-price');
  this.closeProject = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.close-btn');
  this.nextImage = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.next-btn');
  this.prevImage = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.prev-btn'); // container event

  this.container.addEventListener('click', function (e) {
    if (e.target.classList.contains('project')) {
      console.log(e.target, this.list);
    }
  }.bind(this));
  console.log(this.container);
}

ModalProject.prototype.openModal = function (selectedProject, list) {};

const modalProject = () => {};



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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _toggleSidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleSidebar.js */ "./src/js/toggleSidebar.js");
/* harmony import */ var _createModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createModal.js */ "./src/js/createModal.js");



window.addEventListener('load', () => {
  Object(_createModal_js__WEBPACK_IMPORTED_MODULE_2__["singleProject"])();
  const DarkProject = new _createModal_js__WEBPACK_IMPORTED_MODULE_2__["ModalProject"](Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.about-projects'));
});

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
const closeProjectBtn = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.modal-project .close-btn');
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