# Ember-natural

[natural-sdk](https://github.com/olivierlesnicki/natural-sdk) wrapped and bundled for ember-cli users.

## Installation

* `ember install ember-natural`

## Usage

To setup, you should first configure the service through `config/environment`:
```js
module.exports = function(environment) {
  var ENV = {
    natural: 'http://domain.ext' // Host of your Natural API
  };
}
```

Then inject the `natural` service and use it as documented [here](https://github.com/olivierlesnicki/).
```js
import Ember from 'ember';

const {
  get,
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  natural: service(),
  model() {
    return get(this, 'natural')
      .dropdown('dQw4w9WgXcQ')
      .send('I want to contact an agent.');
  }
});
```

### Why is this wrapper needed?

* Original emits a global
* Original requires a Promise polyfil (ember users have RSVP)
* Original isn't Ember run-loop aware
