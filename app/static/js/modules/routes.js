import api from './api.js'
import collection from './collection.js'
import template from './templateRendering.js'
import htmlElements from './createElements.js'

//Seting up the routes.

var routes = {

  init: function() {
    routie({
      'notFound': function() {
        template.apiNotFound();
      },
      'trending': function() {
        api.init()
      },
      'trending/:id': function(id) {
        var data = JSON.parse(localStorage.getItem('trendingData'));
        collection.trending(data)

        collection.list.trendingImages.forEach(function(data) {
          if (data.id == id) {
            template.detailRender(data)
          }
        })
      }

    })

  },
  loader: {
    show: function show() {
      htmlElements.loader.classList.remove('hide')
      htmlElements.loader.classList.add('show')
    },
    hide: function hide() {
      htmlElements.loader.classList.remove('show')
      htmlElements.loader.classList.add('hide')
    }
  }
};

export default routes
