import routes from './routes.js'
// Api call
var api = {
  init: function() {
    var url = "http://api.giphy.com/v1/gifs/search?q=trending&api_key=Dw0l0xhERgry5Bpd2UhdnvujDOA7iM6B&limit=20"
    var loadData = new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', url, true)

      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          var data = JSON.parse(request.responseText);

          resolve(data)
        } else {
          // We reached our target server, but it returned an error
          reject()
        }
      }
      request.onerror = (err) => {
        reject()
        console.log(err)
      };
      request.send()
    });
    return loadData
  }
}

// exporting
export default api
