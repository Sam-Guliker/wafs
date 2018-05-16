import api from './api.js'
import collection from './collection.js'
import template from './templateRendering.js'
import htmlElements from './createElements.js'

//Seting up the routes.

var routes = {

  init: function() {
    routie({
      'trending': function() {
        template.pageRender()
        api.init()
      },
      'trending/:id': function(id) {
        var data = JSON.parse(localStorage.getItem('data'))

        data.forEach(function(data) {
          if (data.id == id) {
            template.detailRender(data)
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
