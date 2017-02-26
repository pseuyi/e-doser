AFRAME.registerComponent('play', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300}
  },
  init: function () {
    // stop current music
  },
  setupFadeAnimation: function () {
    // append audio
  }
});
