import collection from "./collection.js";
import template from "./templateRendering.js";

var api = {
  gifs: function() {
    var url =
      "https://api.giphy.com/v1/gifs/trending?api_key=Dw0l0xhERgry5Bpd2UhdnvujDOA7iM6B&limit=25";
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        collection.listTrending = myJson.data;
        template.gifsRender();
      });
  },
  stickers: function() {
    var url =
      "https://api.giphy.com/v1/stickers/trending?api_key=Dw0l0xhERgry5Bpd2UhdnvujDOA7iM6B&limit=25";
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        collection.listStickers = myJson.data;
        template.stickersRender();
      });
  }
};

// exporting
export default api;
