import { render } from '../render.js';
import Filters from '../view/filters.js';

export default class HeaderPresenter {
  constructor ({container}) {
    this.container = container;
  }

  init () {
    render(new Filters, this.container);

  }
}
