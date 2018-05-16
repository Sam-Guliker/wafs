import htmlElements from './createElements.js'
import collection from './collection.js'
import loaders from './loaders.js'

var template = {

  pageRender() {
    setTimeout(function(){
      htmlElements.body.appendChild(htmlElements.main)
      htmlElements.main.appendChild(htmlElements.h1)
      htmlElements.h1.innerHTML = "Trending Gifs"
      htmlElements.main.append(htmlElements.ul)
      loaders.hide()
    }, 1000);
  },

  trendingRender() {
    var trendingData = collection.listTrending.map(function(item){
      return {
        id: item.id,
        title: item.title,
        image: item.images.preview_gif,
        source: item.source_tld,
        image_big: item.images.original
      }
    })

    var data = localStorage.setItem('gifs', JSON.stringify(trendingData))
    htmlElements.ul.innerHTML = ''

    var source = document.getElementById("trending-template").innerHTML;
    var template = Handlebars.compile(source);

    trendingData.forEach(function(item, i) {
      var html = template(trendingData[i])
      htmlElements.ul.innerHTML += html
    })
  },

  stickerRender() {
    var stickersData = collection.listStickers.map(function(item){
      return {
        id: item.id,
        title: item.title,
        image: item.images.preview_gif,
        source: item.source_tld,
        image_big: item.images.original
      }
    })

    var data = localStorage.setItem('stickers', JSON.stringify(stickersData))

    htmlElements.h1.innerHTML = "Trending Stickers"
    htmlElements.ul.innerHTML = ''

    var source = document.getElementById("stickers-template").innerHTML;
    var template = Handlebars.compile(source);

    stickersData.forEach(function(item, i) {
      var html = template(stickersData[i])
      htmlElements.ul.innerHTML += html
    })
  },

  trendingDetail(data) {
    htmlElements.ul.innerHTML = ''
    var source = document.getElementById("trending-detail").innerHTML;
    var template = Handlebars.compile(source)


    var html = template(data)
    htmlElements.ul.innerHTML = html
  },

  stickerDetail(data) {
    htmlElements.ul.innerHTML = ''
    var source = document.getElementById("stickers-detail").innerHTML;
    var template = Handlebars.compile(source)
    console.log(data)

    var html = template(data)
    htmlElements.ul.innerHTML = html
  },

  apiNotFound() {
    htmlElements.ul.innerHTML = ''
    htmlElements.h1.innerHTML = "Oops, somthing went wrong."
  }
}

export default template
