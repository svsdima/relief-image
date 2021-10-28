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

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: projects, tabs, landscape, reviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landscape", function() { return landscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviews", function() { return reviews; });
const projects = [{
  name: 'Правдинское',
  img: ['img/projects/pravdinsk/1.jpg', 'img/projects/pravdinsk/2.jpg', 'img/projects/pravdinsk/3.jpg', 'img/projects/pravdinsk/4.jpg'],
  list: ['Черновая планировка и уборка мусора', 'Планировка территории на плоскости', 'Устройство рокария', 'Посадка плодовых и ягодных деревьев и кустарников', 'Подготовка участка под рулонный газон', 'Отсевная площадка под грядки', 'Устройство экопарковки', 'Установка грядок', 'Установка теплицы', 'Укладка рулонного газона'],
  price: '1 400 000'
}, {
  name: 'Петергоф',
  img: ['img/projects/petergof/1.jpg', 'img/projects/petergof/2.jpg', 'img/projects/petergof/3.jpg'],
  list: ['Обустройство и укрепление дренажной канавы', 'Посадка растений', 'Укладка рулонного газона'],
  price: '185 000'
}, {
  name: 'Репино',
  img: ['img/projects/repino/1.jpg', 'img/projects/repino/2.jpg', 'img/projects/repino/3.jpg', 'img/projects/repino/4.jpg'],
  list: ['Ландшафтное проектирование участка', 'Планировка территории на плоскости', 'Создание дренажной системы', 'Устройство дорожного покрытия', 'Устройство рокария', 'Посадка цветника и живой изгороди'],
  price: '400 000'
}];
const tabs = [{
  id: 'season',
  title: 'Сезоные выезды',
  info: ['Стоимость выезда рассчитывается индивидуально (взависимости от: площади участка, удалённости, сложности проводимых работ, количества задействованных людей).']
}, {
  id: 'autumn',
  title: 'Осень',
  info: ['Уход за цветниками (обрезка сухого, рыхление, прополка).', 'Уход за газоном (осенняя подкормка)', 'Стрижка газона', 'Деление растений (по мере необходимости)', 'Уборка листьев', 'Подготовка растений к зиме,']
}, {
  id: 'spring',
  title: 'Весна',
  info: ['Обрезка плодовых (производится с ноября по март, до первого сокодвижения)', 'Санитарная обрезка роз (производтся с апреля по май, удаление повреждённых веток после зимы)', 'Внесение удобрения на все посадки (производится ранней весной по снегу)', 'Обработка от вредителей и болезней (устойчивая температура от +5)', 'Уход за газоном (скарификация, аэрация, мульчирование, удобрение, производится после полного просыхания газона)']
}, {
  id: 'summer',
  title: 'Лето',
  info: ['Уход за цветниками (прополка, обрезка сухого, рыхление)', 'Формовочная обрезка (фигурная стрижка, стрижка изгородей, производитсяпо мере роста)', 'Стрижка газона', 'Обработка газона от сорняков (первая обработка производится после первого коса газона)', 'Внесение удобрений ( по газону производится 1 раз в 2 недели, по цветниками в зависимости от растений)', 'Обработка от вредителей и болезней (производится с интервалом в 10-14 дней)', 'Обработка мощения от сорняков (производится 1 раз в месяц)']
}];
const landscape = [{
  title: 'Ландшафтное проектирование участка',
  img: 'img/landscape/1.jpg'
}, {
  title: 'Подготовка участка',
  img: 'img/landscape/2.jpg'
}, {
  title: 'Создание дренажной системы',
  img: 'img/landscape/3.jpg'
}, {
  title: 'Устройство дорожного покрытия',
  img: 'img/landscape/4.jpg'
}, {
  title: 'Альпийские горки, рокарии, альпинарии',
  img: 'img/landscape/5.jpg'
}, {
  title: 'Устройство ручьев, водоемов, каскадов',
  img: 'img/landscape/6.jpg'
}, {
  title: 'Строительство, маф',
  img: 'img/landscape/7.jpg'
}, {
  title: ' Подпорные стенки',
  img: 'img/landscape/8.jpg'
}, {
  title: 'Посадка растений',
  img: 'img/landscape/9.jpg'
}, {
  title: 'Устройство газона',
  img: 'img/landscape/10.jpg'
}];
const reviews = [{
  name: 'Наталья',
  img: 'img/reviews/natalia.jpg',
  text: 'В 2016 году понадобились специалисты по уходу за садом. С командой Надежды наш сад зацвёл новыми красками. В том же году мы купили дом в Репино. Хотели создать уютный уголок с зоной отдыха. И уже тогда мы понимали, кому доверить воплощение наших желаний. Работой довольны, все предпочтения были учтены. По сегодняшний день мы доверяем наш сад только специалистам relief image.'
}, {
  name: 'Ольга',
  img: 'img/reviews/olga.jpg',
  text: 'Наш участок находится в Петергофе. К Надежде обратились в 2016 году. Была необходимость в уходе за садом, растения болели, а также, было много насекомых. Работой команды довольны. Вот уже 4 года доверяем наш сад специалистам!'
}, {
  name: 'Михаил',
  img: 'img/reviews/michael.jpg',
  text: 'К компании relief image обратился в конце 2019 года, и летом 2020 все работы были закончены. Мы с семьей живём в пос. Правдинское озеро, хотели наш пустой и неровный участок превратить в уютный зеленый сад, с хорошим газоном, огородом и создать цветники у дома. Работой довольны, команда Надежды теперь занимается обслуживанием нашего участка.'
}];


/***/ }),

/***/ "./src/js/garden.js":
/*!**************************!*\
  !*** ./src/js/garden.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");


const garden = tabs => {
  const tabsLayout = () => {
    const tabsWrapper = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.garden-info');
    const btnsWrapper = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.garden-list');
    const btns = tabs.map(tab => {
      const {
        id,
        title
      } = tab;
      return `
                <li class="garden-link" data-id="${id}">${title}</li>
            `;
    }).join("");
    const tabText = tabs.map(tab => {
      const {
        id,
        info
      } = tab;
      return `
                <ul class="garden-text" id="${id}">
                    ${info.map(text => `<li>${text}</li>`).join("")}
                </ul>
            `;
    }).join("");
    const btnsWithText = tabs.map(tab => {
      const {
        id,
        info,
        title
      } = tab;
      return `
                <li class="garden-link" data-id="${id}">${title}</li>
                <ul class="garden-text" id="${id}">
                    ${info.map(text => `<li>${text}</li>`).join("")}
                </ul>
            `;
    }).join("");

    if (window.screen.width > 800) {
      btnsWrapper.innerHTML = btns;
      tabsWrapper.innerHTML = tabText;

      if (!btnsWrapper.firstElementChild.classList.contains('active')) {
        btnsWrapper.firstElementChild.classList.add('active');
        tabsWrapper.firstElementChild.classList.add('active');
      }
    }

    if (window.screen.width <= 800) {
      btnsWrapper.innerHTML = btnsWithText;

      if (!btnsWrapper.firstElementChild.classList.contains('active')) {
        btnsWrapper.firstElementChild.classList.add('active');
        btnsWrapper.firstElementChild.nextElementSibling.classList.add('active');
      }
    }
  };

  tabsLayout();

  const gardenTabs = () => {
    const tabs = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.garden-tabs');
    const btns = document.querySelectorAll('.garden-link');
    const tabsInfo = document.querySelectorAll('.garden-text');
    tabs.addEventListener('click', e => {
      const id = e.target.dataset.id;

      if (id) {
        btns.forEach(btn => {
          btn.classList.remove('active');
          e.target.classList.add('active');
        });
        tabsInfo.forEach(tab => {
          tab.classList.remove('active');
        });
        const tab = document.getElementById(id);
        tab.classList.add('active');
      }
    });
  };

  gardenTabs();
};

/* harmony default export */ __webpack_exports__["default"] = (garden);

/***/ }),

/***/ "./src/js/hideText.js":
/*!****************************!*\
  !*** ./src/js/hideText.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");


const hideText = () => {
  const btnDescr = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.section-descr .btn-descr');
  const hideText = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.section-descr .hide-text');

  if (window.screen.width > 800) {
    hideText.classList.remove('close');
    hideText.classList.add('open');
  }

  if (window.screen.width <= 800) {
    hideText.classList.remove('open');
    hideText.classList.add('close');
  }

  btnDescr.addEventListener('click', () => {
    if (hideText.classList.contains('close')) {
      hideText.classList.remove('close');
      hideText.classList.add('open');
      btnDescr.innerHTML = `
                <i class="fas fa-chevron-up"></i>
            `;
    } else if (hideText.classList.contains('open')) {
      hideText.classList.remove('open');
      hideText.classList.add('close');
      btnDescr.innerHTML = `
                <i class="fas fa-chevron-down"></i>
            `;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (hideText);

/***/ }),

/***/ "./src/js/landscape.js":
/*!*****************************!*\
  !*** ./src/js/landscape.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");


const landscapeList = landscape => {
  const listWrapper = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.landscape-wrapper');
  const list = landscape.map((item, index) => {
    const {
      title,
      img
    } = item;

    if (index < 4) {
      return `
                <div class="landscape-item">
                    <div class="landscape-title">${index + 1}. ${title}</div>
                    <div class="landscape-img">
                        <img src="${img}" alt="${index + 1}">
                    </div>
                </div>
            `;
    } else if (index >= 4) {
      return `
            <div class="landscape-item show">
                <div class="landscape-title">${index + 1}. ${title}</div>
                <div class="landscape-img">
                    <img src="${img}" alt="${index + 1}">
                </div>
            </div>
        `;
    }
  });
  listWrapper.innerHTML = list.join("");
  const landscapeItems = document.querySelectorAll('.landscape-item');
  const btnLandscape = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.btn-landscape');

  if (window.screen.width > 800) {
    landscapeItems.forEach(item => {
      if (item.classList.contains('hide')) {
        item.classList.remove('hide');
        item.classList.add('show');
      }
    });
  }

  if (window.screen.width <= 800) {
    landscapeItems.forEach(item => {
      if (item.classList.contains('show')) {
        item.classList.remove('show');
        item.classList.add('hide');
      }
    });
  }

  btnLandscape.addEventListener('click', () => {
    landscapeItems.forEach(item => {
      if (item.classList.contains('hide')) {
        item.classList.remove('hide');
        item.classList.add('show');
        btnLandscape.innerHTML = `
                    <i class="fas fa-chevron-up"></i>
                `;
      } else if (item.classList.contains('show')) {
        item.classList.remove('show');
        item.classList.add('hide');
        btnLandscape.innerHTML = `
                    <i class="fas fa-chevron-down"></i>
                `;
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (landscapeList);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/js/data.js");
/* harmony import */ var _toggleSidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleSidebar.js */ "./src/js/toggleSidebar.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/js/projects.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll */ "./src/js/scroll.js");
/* harmony import */ var _garden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./garden */ "./src/js/garden.js");
/* harmony import */ var _landscape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landscape */ "./src/js/landscape.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup */ "./src/js/popup.js");
/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reviews */ "./src/js/reviews.js");
/* harmony import */ var _hideText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hideText */ "./src/js/hideText.js");









window.addEventListener('DOMContentLoaded', () => {
  Object(_popup__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_scroll__WEBPACK_IMPORTED_MODULE_3__["scroll"])();
  Object(_projects__WEBPACK_IMPORTED_MODULE_2__["default"])(_data_js__WEBPACK_IMPORTED_MODULE_0__["projects"]);
  Object(_garden__WEBPACK_IMPORTED_MODULE_4__["default"])(_data_js__WEBPACK_IMPORTED_MODULE_0__["tabs"]);
  Object(_landscape__WEBPACK_IMPORTED_MODULE_5__["default"])(_data_js__WEBPACK_IMPORTED_MODULE_0__["landscape"]);
  Object(_reviews__WEBPACK_IMPORTED_MODULE_7__["default"])(_data_js__WEBPACK_IMPORTED_MODULE_0__["reviews"]);
  Object(_hideText__WEBPACK_IMPORTED_MODULE_8__["default"])();
});

/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "./src/js/scroll.js");



const popup = () => {
  /* PopupToggle */
  const openPopup = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.btn-popup');
  const popup = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.popup');
  const closePopup = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.popup-wrapper .close-btn');
  popup.addEventListener('click', e => {
    if (e.target === popup) {
      popup.classList.remove('open');
    }
  });
  openPopup.addEventListener('click', () => {
    popup.classList.add('open');
    Object(_scroll__WEBPACK_IMPORTED_MODULE_1__["offScroll"])();
  });
  closePopup.addEventListener('click', () => {
    popup.classList.remove('open');
    Object(_scroll__WEBPACK_IMPORTED_MODULE_1__["onScroll"])();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (popup);

/***/ }),

/***/ "./src/js/projects.js":
/*!****************************!*\
  !*** ./src/js/projects.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ "./src/js/scroll.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ "./src/js/slider.js");




const makingProjects = projects => {
  const projectsWrapper = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.projects-wrapper');
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
    let positionProject = 'next'; // let positionImage = 'next';

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
                            <div class="modal-main-img-wrapper">
                                <img src="${img[0]}" class="modal-main-img" alt="main-img">
                            </div>
                            <div class="modal-images-wrapper">
                                <div class="modal-images">
                                    ${img.map((image, imageIndex) => {
        let positionImage = 'next';

        if (imageIndex === 0) {
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
                                </div>
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
    const last = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.last');
    const active = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.active');
    const modalImages = document.querySelectorAll('.modal-images');
    const modalImage = document.querySelectorAll('.modal-image');
    const prevImageBtns = document.querySelectorAll('.prev-image-btn');
    const nextImageBtns = document.querySelectorAll('.next-image-btn');
    await projectList.forEach(async singleProject => {
      await singleProject.addEventListener('click', function (e) {
        Object(_scroll__WEBPACK_IMPORTED_MODULE_0__["offScroll"])();
        modalProjectList.forEach(project => {
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
            modalContent.lastElementChild.classList.add('last');
          }

          if (e.target.parentElement.parentElement.dataset.id > 1 && e.target.parentElement.parentElement.dataset.id === project.dataset.id) {
            project.previousElementSibling.classList.add('last');
          }
        });
      });
    }); // modal image slider

    modalProjectList.forEach(project => {
      if (project.classList.contains('active')) {
        modalImage.forEach(image => {
          image.addEventListener('click', e => {
            modalProjectList.forEach(project => {
              if (project.classList.contains('active')) {
                let mainImg = project.getElementsByClassName('modal-main-img')[0];
                let images = project.querySelectorAll('.modal-image');
                images.forEach(image => {
                  image.classList.remove('active');
                  image.classList.remove('next');
                  image.classList.remove('last');
                });
                let active = e.target.parentElement;
                let next = active.nextElementSibling;

                if (!next) {
                  next = images[0];
                }

                let last = active.previousElementSibling;

                if (!last) {
                  last = images[images.length - 1];
                }

                active.classList.add('active');
                next.classList.add('next');
                last.classList.add('last');
                return mainImg.src = e.target.src;
              }
            });
          });
        }); // modal-image-btns event

        prevImageBtns.forEach(prevImageBtn => {
          prevImageBtn.addEventListener('click', e => {
            modalProjectList.forEach(project => {
              if (project.classList.contains('active')) {
                let modalWrapper = project.childNodes[3].children[0].querySelector('.modal-images');
                let modalImageActive = project.childNodes[3].children[0].children[1].querySelector('.modal-image.active');
                let modalImageLast = project.childNodes[3].children[0].children[1].querySelector('.modal-image.last');
                let mainImg = project.childNodes[3].children[0].querySelector('.modal-main-img');
                Object(_slider__WEBPACK_IMPORTED_MODULE_2__["default"])(modalWrapper, modalImageActive, modalImageLast, 'prev', mainImg);
              }

              ;
            });
          });
        });
        nextImageBtns.forEach(nextImageBtn => {
          nextImageBtn.addEventListener('click', e => {
            modalProjectList.forEach(project => {
              if (project.classList.contains('active')) {
                let modalWrapper = project.childNodes[3].children[0].querySelector('.modal-images');
                let modalImageActive = project.childNodes[3].children[0].children[1].querySelector('.modal-image.active');
                let modalImageLast = project.childNodes[3].children[0].children[1].querySelector('.modal-image.last');
                let mainImg = project.childNodes[3].children[0].querySelector('.modal-main-img');
                Object(_slider__WEBPACK_IMPORTED_MODULE_2__["default"])(modalWrapper, modalImageActive, modalImageLast, '', mainImg);
              }

              ;
            });
          });
        });
      }

      ;
    });
    let mainImg = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.modal-main-img');
    prevProjectBtn.addEventListener('click', () => {
      Object(_slider__WEBPACK_IMPORTED_MODULE_2__["default"])(modalContent, Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.single-project.active'), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.single-project.last'), 'prev');
    });
    nextProjectBtn.addEventListener('click', () => {
      Object(_slider__WEBPACK_IMPORTED_MODULE_2__["default"])(modalContent, Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.single-project.active'), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElement"])('.single-project.last'));
    });
    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('open');
      Object(_scroll__WEBPACK_IMPORTED_MODULE_0__["onScroll"])();
    });
  };

  createProject(projects);
  modalProject(projects);
};

/* harmony default export */ __webpack_exports__["default"] = (makingProjects);

/***/ }),

/***/ "./src/js/reviews.js":
/*!***************************!*\
  !*** ./src/js/reviews.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./src/js/slider.js");



const reviewsSection = reviews => {
  const reviewsWrapper = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.reviews-list');
  const nextReviewBtn = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.next-reviews-btn');
  const prevReviewBtn = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.prev-reviews-btn'); // setSlides

  reviewsWrapper.innerHTML = reviews.map((review, slideIndex) => {
    const {
      img,
      name,
      text
    } = review; // more logic later

    let position = 'next';

    if (slideIndex === 0) {
      position = 'active';
    }

    if (slideIndex === reviews.length - 1) {
      position = 'last';
    }

    return `        
            <div class="review ${position}">
                <div class="review-content">
                    <div class="review-img">
                        <img src="${img}" alt="${img}">
                    </div>
                    <div class="review-name">${name}</div>
                    <div class="review-text">${text}</div>
                </div>
            </div>
      `;
  }).join("");
  prevReviewBtn.addEventListener('click', () => {
    Object(_slider__WEBPACK_IMPORTED_MODULE_1__["default"])(reviewsWrapper, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.review.active'), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.review.last'), 'prev');
  });
  nextReviewBtn.addEventListener('click', () => {
    Object(_slider__WEBPACK_IMPORTED_MODULE_1__["default"])(reviewsWrapper, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.review.active'), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.review.last'));
  });
  const allText = document.querySelectorAll('.review-text');
  allText.forEach(text => {
    text.addEventListener('touchstart', e => {
      if (e.target) {
        document.body.style.overflow = "hidden";
      }
    });
    text.addEventListener('touchend', e => {
      console.log(e.target);

      if (e.target) {
        document.body.style.overflow = "";
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reviewsSection);

/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/*! exports provided: scroll, offScroll, onScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offScroll", function() { return offScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onScroll", function() { return onScroll; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");


const scroll = () => {
  /* Scroll */
  const navbar = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.navbar');
  const linksContainer = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.links-container');
  const links = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.nav-links');
  const topLink = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.top-link');
  const navToggle = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.nav-toggle');
  const header = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElement"])('.header');
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
      header.style.paddingTop = `${navHeight}px`;
    } else {
      navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 600) {
      topLink.classList.add('show-link');
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
        linksContainer.style.height = 0;
      }

      window.scrollTo({
        left: 0,
        top: position
      });
    });
  });
};

const offScroll = () => {
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = `${calcScroll()}px`;
};

const onScroll = () => {
  document.body.style.overflow = "";
  document.body.style.marginRight = `0px`;
};

const calcScroll = () => {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  /* Calculating the scroll size */

  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};



/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");


const slider = (container, activeClass, lastClass, typeBtn, mainImg) => {
  let active = activeClass;
  let last = lastClass;
  let next = active.nextElementSibling;

  if (!next) {
    next = container.firstElementChild;
  }

  active.classList.remove(['active']);
  last.classList.remove(['last']);
  next.classList.remove(['next']);

  if (typeBtn === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;

    if (!next) {
      next = container.lastElementChild;
    }

    next.classList.remove(['next']);
    next.classList.add('last');

    if (mainImg) {
      mainImg.src = last.children[0].src;
    }

    return;
  }

  active.classList.add('last');
  last.classList.add('next');
  next.classList.add('active');

  if (mainImg) {
    mainImg.src = next.children[0].src;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

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