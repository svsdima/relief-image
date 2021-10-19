import projects from "./data";
import { getElement } from './utils';
import './toggleSidebar.js';
import { createProject, modalProject, projectEvent } from './projects';
import { singleProject, ModalProject } from './createModal';
import makingProjects from './projects';



window.addEventListener('DOMContentLoaded', () => {
    makingProjects();
    // projectEvent();
    // singleProject();
    // const modal = new ModalProject(getElement('.about-projects'))
    /* PopupToggle */
    const openPopup = getElement('.btn-popup');
    const popup = getElement('.popup');
    const closePopup = getElement('.popup-wrapper .close-btn');

    openPopup.addEventListener('click', () => {
        popup.classList.add('open');
    });
    closePopup.addEventListener('click', () => {
        popup.classList.remove('open');
    });

    /* Scroll */
    const navbar = getElement('.navbar');
    const linksContainer = getElement('.links-container');
    const links = getElement('.nav-links');
    const topLink = getElement('.top-link');
    const navToggle = getElement('.nav-toggle');
    const header = getElement('.header');

    navToggle.addEventListener('click', () => {
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const linksHeight = links.getBoundingClientRect().height;

        if (containerHeight === 0) {
            linksContainer.style.height = `${linksHeight}px`;
        } else {
            linksContainer.style.height = 0;
        }
    });


    // ***Fixed navbar***
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
    });

    // ***Smoth Scroll***
    const scrollLinks = document.querySelectorAll('.nav-link');

    scrollLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // navigate to specific spot
            const id = e.currentTarget.getAttribute('href').slice(1);
            const element = document.getElementById(id);

            // calculate the hights
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
                top: position,
            });
            // linksContainer.style.height = 0;
        });
    });

});