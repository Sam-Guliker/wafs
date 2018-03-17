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
      routes.init()
      routes.apiPromise()
    }
  }
  
  app.init()

})()
