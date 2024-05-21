import { createElement } from '../render.js';

const SORTING_TYPES = ['Day', 'Event', 'Time', 'Price', 'Offers'];
const DISABLED_TYPES = ['Day', 'Offers'];

const checkDisabledTypes = (sortingType) => DISABLED_TYPES.includes(sortingType) ? 'disabled' : '';

const createSortingElement = (sortingType) => `
<div class="trip-sort__item  trip-sort__item--day">
  <input id="sort-${sortingType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortingType}" ${checkDisabledTypes(sortingType)}>
  <label class="trip-sort__btn" for="sort-${sortingType}">${sortingType}</label>
</div>
`;

const createSortingTemplate = () => `
<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
${SORTING_TYPES.map((sortingType) => createSortingElement(sortingType)).join('')}
</form>`;

export default class Sorting {
  getTemplate () {
    return createSortingTemplate();
  }

  getElement () {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement () {
    this.element = null;
  }
}
