module.exports = request;

function request(url, done) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  // IE11 does not support when the `responseType` is set to `json`
  // xhr.responseType = 'json';

  xhr.onload = function () {
    try {
      return done(null, this.status, JSON.parse(this.responseText));
    } catch (err) {
      return done(err);
    }
  };

  xhr.onerror = function (err) {
    return done(err);
  };

  xhr.ontimeout = function (err) {
    return done(err);
  };

  xhr.setRequestHeader('User-Agent', 'FaviconGrabber.com');
  xhr.send();
}
