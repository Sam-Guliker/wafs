import htmlElements from './createElements.js'
import collection from './collection.js'

var template = {

  overviewRender() {
    console.log(collection.list)
    var source = document.getElementById("trending-template").innerHTML;
    var template = Handlebars.compile(source);
    htmlElements.ul.innerHTML = ''

    htmlElements.body.appendChild(htmlElements.ul)
    htmlElements.ul.appendChild(htmlElements.h1)

    htmlElements.h1.innerHTML = "Trending Gifs"

    data.forEach(function(item, i) {
      var html = template(data[i])
      htmlElements.ul.innerHTML += html
    })

  },

  detailRender(data) {
    var source = document.getElementById("detail-template").innerHTML;
    var template = Handlebars.compile(source)

    htmlElements.ul.innerHTML = ''

    htmlElements.body.appendChild(htmlElements.ul)
    htmlElements.h1.innerHTML = "Random Gifs"

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
