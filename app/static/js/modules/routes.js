import api from './api.js'
import collection from './collection.js'
import template from './templateRendering.js'
import htmlElements from './createElements.js'

//Seting up the routes.

// Special thanks to Kevin. :>

var routes = {

  apiPromise: function() {

    return api.init()
      .then(
        function(data) {
          localStorage.setItem('trendingData', JSON.stringify(data))
          window.location.hash = '#trending'
        })
      .catch(function(err) {
        console.log('error', err);
        routie('notFound')
      })

  },

  init: function() {

    routie({
      'notFound': function() {
        template.apiNotFound();
      },
      'trending': function() {
        var data = JSON.parse(localStorage.getItem('trendingData'));
        collection.trending(data)
        template.overviewRender(collection.list.trendingImages)
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

    this.apiPromise()

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
