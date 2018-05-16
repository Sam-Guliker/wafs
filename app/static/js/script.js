/*

  Imports

*/

import api from './modules/api.js'
import routes from './modules/routes.js'

/*

  Javascript Init

*/

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
