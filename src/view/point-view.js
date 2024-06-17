import AbstractView from '../framework/view/abstract-view.js';
import he from 'he';
import {formatStringToDate, formatStringToShortDate, formatStringToTime, toCapitalize, calcDuration} from '../utils.js';

const getCheckedOffers = (allOffers, pointOffersIDs) => {
  const checkedOffers = [];
  allOffers.forEach(({
    id,
    title,
    price
  }) => {
    if (pointOffersIDs.find((pointOffersID) => pointOffersID === id)) {
      checkedOffers.push({
        price,
        title
      });
    }
  });
  return checkedOffers;
};

const createOffersTemplate = (offers) => {
  const items = offers.reduce((markup, {title, price}) => `${markup}
     <li class="event__offer">
      <span class="event__offer-title">${he.encode(String(title))}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${he.encode(String(price))}</span>
    </li>`, '');

  if (offers.length > 0) {
    return `
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${items}
    </ul>
    `;
  }
  return '';
};

const createSheduleTemplate = (dateFrom, dateTo) =>
  `<div class="event__schedule">
  <p class="event__time">
    <time class="event__start-time" datetime="${formatStringToDate(dateFrom)}">${formatStringToTime(dateFrom)}</time>
    &mdash;
    <time class="event__end-time" datetime="${formatStringToDate(dateTo)}">${formatStringToTime(dateTo)}</time>
  </p>
  <p class="event__duration">${calcDuration(dateFrom, dateTo)}</p>
</div>`;

const createPointTemplate = ({
  point,
  pointDestination,
  pointOffers
}) => {
  const {
    basePrice,
    dateFrom,
    dateTo,
    type,
    isFavorite
  } = point;

  return `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${formatStringToDate(dateFrom)}">${formatStringToShortDate(dateFrom)}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${he.encode(String(type))}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${toCapitalize(he.encode(String(type)))} ${he.encode(String(pointDestination?.name)) ?? ''}</h3>
        ${createSheduleTemplate(dateFrom, dateTo)}
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${he.encode(String(basePrice))}</span>
        </p>
        ${createOffersTemplate(getCheckedOffers(pointOffers, point.offers))}
        <button class="event__favorite-btn ${isFavorite ? ' event__favorite-btn--active' : ''}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`;
};

export default class PointView extends AbstractView {
  #point = null;
  #pointDestination = null;
  #pointOffers = null;
  #onEditClick = null;
  #onFavoriteClick = null;

  constructor({
    point,
    pointDestination,
    pointOffers,
    onEditClick,
    onFavoriteClick,
  }) {
    super();
    this.#point = point;
    this.#pointDestination = pointDestination;
    this.#pointOffers = pointOffers;
    this.#onEditClick = onEditClick;
    this.#onFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createPointTemplate({
      point: this.#point,
      pointDestination: this.#pointDestination,
      pointOffers: this.#pointOffers
    });
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#onEditClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#onFavoriteClick();
  };
}
