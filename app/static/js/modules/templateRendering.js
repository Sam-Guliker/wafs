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

  gifsRender() {
    var trendingData = collection.listTrending.map(function(item){
      return {
        id: item.id,
        title: item.title,
        image: item.images.preview_gif,
        source: item.source_tld,
        image_big: item.images.original
      }
    })

    var result = trendingData.filter( item => item.source !== "");

    var data = localStorage.setItem('gifs', JSON.stringify(trendingData))
    htmlElements.ul.innerHTML = ''

    var source = document.getElementById("gifs-template").innerHTML;
    var template = Handlebars.compile(source);

    result.forEach(function(item, i) {
      var html = template(result[i])
      htmlElements.ul.innerHTML += html
    })
  },
  stickersRender() {
    var stickersData = collection.listStickers.map(function(item){
      return {
        id: item.id,
        title: item.title,
        image: item.images.preview_gif,
        source: item.source_tld,
        image_big: item.images.original
      }
    })

    var result = stickersData.filter( item => item.source !== "");
    var data = localStorage.setItem('stickers', JSON.stringify(stickersData))

    htmlElements.ul.innerHTML = ''

    var source = document.getElementById("stickers-template").innerHTML;
    var template = Handlebars.compile(source);

    htmlElements.h1.innerHTML = ""
    htmlElements.h1.innerHTML = "Trending Stickers"

    result.forEach(function(item, i) {
      var html = template(result[i])
      htmlElements.ul.innerHTML += html
    })
  },

  gifsDetail(data) {
    htmlElements.ul.innerHTML = ''
    var source = document.getElementById("gifs-detail").innerHTML;
    var template = Handlebars.compile(source)


    var html = template(data)
    htmlElements.ul.innerHTML = html
  },

  stickersDetail(data) {
    htmlElements.ul.innerHTML = ''
    var source = document.getElementById("stickers-detail").innerHTML;
    var template = Handlebars.compile(source)

    var html = template(data)
    htmlElements.ul.innerHTML = html
  },

  apiNotFound() {
    htmlElements.ul.innerHTML = ''
    htmlElements.h1.innerHTML = "Oops, somthing went wrong."
  }
}

export default template
