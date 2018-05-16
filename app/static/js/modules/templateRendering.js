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

  overviewRender() {

    var templateData = collection.list.map(function(item){
      return {
        id: item.id,
        title: item.title,
        image: item.images.preview_gif,
        source: item.source_tld,
        image_big: item.images.original
      }
    })

    var data = localStorage.setItem('data', JSON.stringify(templateData))

    htmlElements.ul.innerHTML = ''

    var source = document.getElementById("trending-template").innerHTML;
    var template = Handlebars.compile(source);

    templateData.forEach(function(item, i) {
      var html = template(templateData[i])
      htmlElements.ul.innerHTML += html
    })

  },

  detailRender(data) {
    var source = document.getElementById("detail-template").innerHTML;
    var template = Handlebars.compile(source)

    htmlElements.ul.innerHTML = ''

    var html = template(data)
    htmlElements.ul.innerHTML = html
  },

  apiNotFound() {
    var source = document.getElementById("error-template").innerHTML;
    var template = Handlebars.compile(source);


    htmlElements.body.appendChild(htmlElements.ul)
    htmlElements.h1.innerHTML = "Oops, somthing went wrong."

    // insert the object into the html
    var html = template()
    htmlElements.ul.innerHTML = html
  }
}

export default template
