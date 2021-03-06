import { getElement } from "./utils";
import slider from './slider';

const reviewsSection = (reviews) => {
    const reviewsWrapper = getElement('.reviews-list');
    const nextReviewBtn = getElement('.next-reviews-btn');
    const prevReviewBtn = getElement('.prev-reviews-btn');

    // setSlides
    reviewsWrapper.innerHTML = reviews.map((review, slideIndex) => {
        const { img, name, text } = review;
        // more logic later
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
        slider(reviewsWrapper, getElement('.review.active'), getElement('.review.last'), 'prev');

    });
    nextReviewBtn.addEventListener('click', () => {
        slider(reviewsWrapper, getElement('.review.active'), getElement('.review.last'));
    });

    const allText = document.querySelectorAll('.review-text');

    allText.forEach((text) => {
        text.addEventListener('touchmove', (e) => {
            if (e.target) {
                document.body.style.overflow = "hidden";
            }
        });
        text.addEventListener('touchend', (e) => {
            console.log(e.target)
            if (e.target) {
                document.body.style.overflow = "";
            }
        });
    });
};

export default reviewsSection;