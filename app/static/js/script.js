import routes from './modules/routes.js'

(function() {
  // strict mode
  'use strict'

  var app = {

    init: function() {

      window.location.hash = 'trending'
      routes.init()
    }
  }

  app.init()

})()
