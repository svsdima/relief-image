import { getElement } from "./utils";

const landscapeList = (landscape) => {
    const listWrapper = getElement('.landscape-wrapper');

    const list = landscape.map((item, index) => {
        const { title, img } = item;
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
    const btnLandscape = getElement('.btn-landscape');

    
    if (window.screen.width > 800) {
        landscapeItems.forEach((item) => {
            if (item.classList.contains('hide')) {
                item.classList.remove('hide');
                item.classList.add('show');
            }
        });
    }
    if (window.screen.width <= 800) {
        landscapeItems.forEach((item) => {
            if (item.classList.contains('show')) {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });
    }

    btnLandscape.addEventListener('click', () => {
        landscapeItems.forEach((item) => {
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
    })

};

export default landscapeList;