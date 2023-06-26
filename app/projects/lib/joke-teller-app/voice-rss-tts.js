import axios from 'axios';

module.exports = {
  speech: speech,
};

function speech(settings) {
  _validate(settings);
  _request(settings);
}

function _validate(settings) {
  if (settings && settings.callback) {
    if (!settings.key) settings.callback('The API key is undefined', null);
    if (!settings.src) settings.callback('The text is undefined', null);
    if (!settings.hl) settings.callback('The language is undefined', null);
  } else throw new Error('The settings are undefined');
}

function _request(settings) {
  var req = _buildRequest(settings);

  axios({
    url: 'https://api.voicerss.org/',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    method: 'POST',
    data: req,
    encoding: null,
  })
    .then((response) => {
      if (response.status === 200) {
        if (settings.callback) {
          settings.callback(null, response);
        }
      }
    })
    .catch((error) => {
      settings.callback(error, null);
    });
}

function _buildRequest(settings) {
  return {
    key: settings.key,
    src: settings.src,
    hl: settings.hl,
    v: settings.v,
    r: settings.r,
    c: settings.c,
    f: settings.f,
    ssml: settings.ssml,
    b64: settings.b64,
  };
}
