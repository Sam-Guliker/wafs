import collection from './collection.js'

var api = {

  init: function() {
    var url = "http://api.giphy.com/v1/gifs/search?q=random&api_key=Dw0l0xhERgry5Bpd2UhdnvujDOA7iM6B&limit=10"
    fetch(url)
      .then(function(response){
        return response.json()
      })
      .then(function(myJson){
        collection.list = myJson.data
      })
    }

}

// exporting
export default api
