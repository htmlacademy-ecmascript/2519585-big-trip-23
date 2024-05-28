import { createElement } from '../render.js';

const createEmptyPointTemplate = () => `
<p class="trip-events__msg">Click New Event to create your first point</p>`;

export default class EmptyPoint {
  getTemplate () {
    return createEmptyPointTemplate();
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
