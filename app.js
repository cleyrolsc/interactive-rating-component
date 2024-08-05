'use strict';
const ratingsContainer = document.querySelector('.ratings');
const ratings = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.ratings-btn');
const selectedRating = document.querySelector('.selected-rating');
const answerContainer = document.querySelector('.answer-container');
const ratingContainer = document.querySelector('.rating-container');

//initial value
let ratingClicked;

//Event Listeners
ratingsContainer.addEventListener('click', (e) => {
  e.preventDefault();
  const clicked = e.target.closest('.rating');

  if (clicked) {
    ratings.forEach((rating) => {
      rating.classList.remove('clicked');
    });
    ratingClicked = clicked.textContent;
    clicked.classList.add('clicked');
  }
  return ratingClicked;
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (ratingClicked) {
    selectedRating.textContent = ratingClicked;
    answerContainer.classList.toggle('hidden');
    ratingContainer.classList.toggle('hidden');
  }
});
