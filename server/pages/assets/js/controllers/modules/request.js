module.exports = request;

function request(url, done) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    return done(null, this.status, this.response);
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
