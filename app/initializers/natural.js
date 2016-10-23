import config from '../config/environment';

export function initialize(/* application */) {
  const application = arguments[1] || arguments[2];
  const { natural } = config;

  application.register('config:natural', natural, { instantiate: false });
  application.inject('service:natural', 'config', 'config:natural');
}

export default {
  name: 'natural',
  initialize
};
