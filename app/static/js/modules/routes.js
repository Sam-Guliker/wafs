import api from './api.js'
import collection from './collection.js'
import template from './templateRendering.js'
import htmlElements from './createElements.js'

//Seting up the routes.
var routes = {

  init: function() {
    routie({
      'gifs': function() {
        template.pageRender()
        api.gifs()
      },
      'gifs/:id': function(id) {
        var data = JSON.parse(localStorage.getItem('gifs'))

        data.forEach(function(data) {
          if (data.id == id) {
            template.gifsDetail(data)
          }
        })
      },
      'stickers': function() {
        template.pageRender()
        api.stickers()
      },
      'stickers/:id': function(id) {
        var data = JSON.parse(localStorage.getItem('stickers'))

        data.forEach(function(data) {
          if (data.id == id) {
            template.stickersDetail(data)
          }
        })
      },
      '*': function() {
        template.apiNotFound();
      }
    })
  }

};

export default routes
