function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Ferdium => {
  // TODO: not sure what "notify" would be useful for this app

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
