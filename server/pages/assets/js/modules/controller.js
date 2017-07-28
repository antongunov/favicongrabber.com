const events = [];

function Controller() {
  if (!(this instanceof Controller)) return new Controller();
}

Controller.prototype.$on = function (event, fn) {
  events[event] = events[event] || [];
  events[event].push(fn);
};

Controller.prototype.$emit = function (event, ...args) {
  if (events[event]) {
    events[event].forEach(fn => fn(...args));
  }
};

Controller.prototype.$proxy = function (fn) {
  return fn.bind(this);
};

Controller.prototype.$load = function (fn) {
  window.addEventListener('load', this.$proxy(fn), false);
};

module.exports = Controller;
