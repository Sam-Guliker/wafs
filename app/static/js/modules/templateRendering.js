// import
import htmlElements from './createElements.js'

// rendering the webpages
var template = {

  overviewRender(data) {
    var source = document.getElementById("trending-template").innerHTML;
    var template = Handlebars.compile(source);
    // Maakt de template altijd schoon.
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
    htmlElements.h1.innerHTML = "Trending Gifs"

    // insert the object into the html
    var html = template(data)
    htmlElements.ul.innerHTML = html
    // toggle(route) {
    //   // 2 show active route
    //   settings.sections.forEach(function(el){
    //     '#' + el.id === route ? el.classList.add('active') : el.classList.remove('active')
    //   })
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
