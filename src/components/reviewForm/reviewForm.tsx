import React, {ChangeEvent, FormEvent, useState} from 'react';
import {OfferPropType} from '../propertyGallery/propertyGallery';
import {useFetchAddCommentMutation} from '../../features/sixCitiesApi';

function ReviewForm({offer} : OfferPropType) {
  const [fetchAdd] = useFetchAddCommentMutation();

  const [review, setReview] = useState({
    id: offer.id,
    rating: 1,
    comment: ''
  });
  const submitter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const count = [1, 2, 3, 4, 5];
  const changeRating = (event: ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setReview((prev) => ({...prev, rating: Number(value)}));
  };
  const changeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = event.target;
    setReview((prev) => ({...prev, comment: value}));
  };
  const sendForm = () => {
    fetchAdd(review);
    setReview({
      id: offer.id,
      rating: 1,
      comment: '',
    });
  };

  return (
    <form className="reviews__htmlForm htmlForm" onSubmit={submitter} >
      <label className="reviews__label htmlForm__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-htmlForm htmlForm__rating">
        {
          count.map((item) => (
            <span key={item}>
              <input
                className="htmlForm__rating-input visually-hidden"
                name="rating"
                value={item}
                id={`${item}-stars`}
                type="radio"
                onChange={changeRating}
              />
              <label
                htmlFor={`${item}-stars`}
                className="reviews__rating-label htmlForm__rating-label"
                title={`${item}-stars`}
              >
                <svg className="htmlForm__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </span>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea htmlForm__textarea"
        id="review"
        name="review"
        placeholder={review.comment}
        value={review.comment}
        onChange={changeText}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit htmlForm__submit button"
          type="button"
          onClick={sendForm}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
