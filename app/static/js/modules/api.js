import collection from './collection.js'
import template from './templateRendering.js'

var api = {

  trending: function() {
    var url = "http://api.giphy.com/v1/gifs/trending?api_key=Dw0l0xhERgry5Bpd2UhdnvujDOA7iM6B&limit=10"
    fetch(url)
      .then(function(response){
        return response.json()
      })
      .then(function(myJson){
        collection.listTrending = myJson.data
        template.trendingRender()
      })
    },
    stickers: function() {
      var url = "http://api.giphy.com/v1/stickers/trending?api_key=Dw0l0xhERgry5Bpd2UhdnvujDOA7iM6B&limit=10"
      fetch(url)
        .then(function(response){
          return response.json()
        })
        .then(function(myJson){
          console.log(myJson)
          collection.listStickers = myJson.data
          template.stickerRender()
        })
      }

}

// exporting
export default api
