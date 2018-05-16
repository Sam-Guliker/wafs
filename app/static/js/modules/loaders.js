import htmlElements from './createElements.js'

var loaders = {
  show: function show() {
    htmlElements.loader.classList.remove('hide')
    htmlElements.loader.classList.add('show')
  },
  hide: function hide() {
    htmlElements.loader.classList.remove('show')
    htmlElements.loader.classList.add('hide')
  }
}

// exporting
export default loaders
