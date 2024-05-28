import { createElement } from '../render.js';

const FILTERS_TYPES = ['Everything', 'Future', 'Present', 'Past'];

const createFilterElement = (filterType) => `
  <div class="trip-filters__filter">
    <input id="filter-${filterType}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterType}">
    <label class="trip-filters__filter-label" for="filter-${filterType}">${filterType}</label>
  </div>`;

const createFiltersTemplate = () => `
  <form class="trip-filters" action="#" method="get">
    ${FILTERS_TYPES.map((filterType) => createFilterElement(filterType)).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
export default class Filters {
  getTemplate () {
    return createFiltersTemplate();
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
