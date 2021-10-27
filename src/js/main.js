import { projects, tabs, landscape, reviews } from "./data.js";
import './toggleSidebar.js';
import makingProjects from './projects';
import { scroll } from './scroll';
import garden from "./garden";
import landscapeList from './landscape';
import popup from "./popup";
import reviewsSection from './reviews';
import hideText from './hideText';

window.addEventListener('DOMContentLoaded', () => {
    popup();
    scroll();
    makingProjects(projects);
    garden(tabs);
    landscapeList(landscape);
    reviewsSection(reviews);
    hideText();
});