import Ember from 'ember';
import natural from '../index';

const {
  Service,
  computed,
  get
} = Ember;

export default Service.extend({

  _natural: computed('config', function() {
    return natural.init(get(this, 'config'));
  }),

  dropdown(...args) {
    get(this, '_natural').dropdown(...args);
  }

});
