import { getElement } from "./utils";
import { tabs } from '../data';

const garden = () => {
    const tabsLayout = () => {
        const tabsWrapper = getElement('.garden-info');
        const btnsWrapper = getElement('.garden-list');

        const btns = tabs.map((tab) => {
            const { id, title } = tab;
            return `
                <li class="garden-link" data-id="${id}">${title}</li>
            `;
        }).join("");
        btnsWrapper.innerHTML = btns;

        const tabText = tabs.map((tab) => {
            const { id, info } = tab;
            return `
                <ul class="garden-text" id="${id}">
                    ${info.map((text) => `<li>${text}</li>`).join("")}
                </ul>
            `;
        }).join("");

        tabsWrapper.innerHTML = tabText;

        if (!btnsWrapper.firstElementChild.classList.contains('active')) {
            btnsWrapper.firstElementChild.classList.add('active');
            tabsWrapper.firstElementChild.classList.add('active');
        }
    }
    
    tabsLayout();
    
    const gardenTabs = () => {
        const tabs = getElement('.garden-tabs');
        const btns = document.querySelectorAll('.garden-link');
        const tabsInfo = document.querySelectorAll('.garden-text');
    
        tabs.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            
            if (id) {
                btns.forEach((btn) => {
                    btn.classList.remove('active');
                    e.target.classList.add('active');
                });
                
                tabsInfo.forEach((tab) => {
                    tab.classList.remove('active');
                });
    
                const tab = document.getElementById(id);
                tab.classList.add('active');
            }
        })
    }
    
    gardenTabs();
}

export default garden;