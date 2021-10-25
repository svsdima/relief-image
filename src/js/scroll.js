import { getElement } from './utils';

const scroll = () => {
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
        if (scrollHeight > navHeight && window.screen.width >= 800) {
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
}

const offScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${calcScroll()}px`;
}
const onScroll = () => {
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
}

const calcScroll = () => {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    /* Вычисляем размер прокрутки */
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

export { scroll,  offScroll, onScroll};