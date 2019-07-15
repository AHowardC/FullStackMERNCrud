// react needs requestAnimationFram

global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
