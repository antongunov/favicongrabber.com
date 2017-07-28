function Controller() {
  if (!(this instanceof Controller)) return new Controller();
}

Controller.prototype.$proxy = function (fn) {
  return fn.bind(this);
};

Controller.prototype.$load = function (fn) {
  window.addEventListener('load', this.$proxy(fn), false);
};

module.exports = Controller;
