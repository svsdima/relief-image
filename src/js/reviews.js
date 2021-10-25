import { getElement } from "./utils";
import { reviews } from '../data';
import slider from './slider';

const reviewsSection = () => {
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
        slider(reviewsWrapper, '.review', 'prev')
    });
    nextReviewBtn.addEventListener('click', () => {
        slider(reviewsWrapper, '.review')
    });
};

export default reviewsSection;