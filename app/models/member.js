import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string')/*,
  class: attr('string'),
  gender: attr('string'),
  race: attr('string'),
  thumbnail: attr('string'),
  items: attr({defaultValue: () => {
    return {};
  }})*/
});
