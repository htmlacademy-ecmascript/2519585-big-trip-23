const CITIES = ['Paris', 'London', 'Chicago', 'Tokio', 'New York', 'Moscow', 'Amsterdam', 'San-Francisco'];
const DESCRIPTION = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto labore atque!';
const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const FILTER_TYPES = ['everything', 'future', 'present', 'past'];
const SortTypes = [{
  type: 'day',
  isDisabled: false,
  isChecked: true
}, {
  type: 'event',
  isDisabled: true,
  isChecked: false
}, {
  type: 'time',
  isDisabled: false,
  isChecked: false
}, {
  type: 'price',
  isDisabled: false,
  isChecked: false
}, {
  type: 'offer',
  isDisabled: true,
  isChecked: false
}];
const Counts = {
  DESTINATIONS: 10,
  DESCRIPTION_PHOTO: 4,
  OFFERS: 7,
  POINTS: 5,
};
const Price = {
  MIN: 1,
  MAX: 500
};
const Duration = {
  HOUR: 5,
  DAY: 3,
  MINUTE: 59
};

export {CITIES,DESCRIPTION,EVENT_TYPES,FILTER_TYPES,SortTypes,Counts,Price,Duration};
