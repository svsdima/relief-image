import { getElement } from "./utils";
import { landscape } from '../data';

const landscapeList = () => {
    const listWrapper = getElement('.landscape-wrapper');

    const list = landscape.map((item, index) => {
        const { title, img } = item;
        return `
        <div class="landscape-item">
            <div class="landscape-title">${index + 1}. ${title}</div>
            <div class="landscape-img">
                <img src="${img}" alt="${index + 1}">
            </div>
        </div>
        `;
    }).join("");

    listWrapper.innerHTML = list;
};

export default landscapeList;