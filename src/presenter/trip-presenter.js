import { render } from '../render.js';
import CreateForm from '../view/create-form.js';
import EditForm from '../view/edit-form.js';
import Sorting from '../view/sorting.js';
import TripList from '../view/trip-list.js';
import Waypoint from '../view/waypoint.js';

export default class TripPresenter {
  newTripPoint = new TripList();

  constructor ({container}) {
    this.container = container;
  }

  init () {
    render(new Sorting, this.container);
    render(this.newTripPoint, this.container);
    render(new EditForm, this.newTripPoint.getElement());
    render (new CreateForm, this.newTripPoint.getElement());

    for (let i = 0; i < 3; i++) {
      render (new Waypoint, this.newTripPoint.getElement());
    }
  }
}
