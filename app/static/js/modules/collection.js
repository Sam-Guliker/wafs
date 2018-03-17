// importing
import api from './api.js';

var collection = {
  list: {
    trendingImages: [],
  },
  trending: function(data) {
    data.data.forEach(item => {
      this.list.trendingImages.push({
        id: item.id,
        title: item.title,
        image: item.images.preview_gif,
        source: item.source_tld,
        image_big: item.images.original
      })
    });
  }
}

// exporting
export default collection
