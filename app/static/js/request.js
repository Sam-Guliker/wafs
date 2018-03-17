(function(){
  var request = new XMLHttpRequest();
  var template = Handlebars.compile(source);

  request.addEventListener("load", reqListener);
  request.open("GET", "http://ghibliapi.herokuapp.com/films/",true);

  function reqListener () {
    if (request.status >= 200 && request.status < 400) {

        var data = JSON.parse(request.responseText);

        template.render(data);

         // data.forEach(function(item, i){
         //   console.log(item.title)
         //
         //   template.render(items)
         // })

       } else {
        // We reached our target server, but it returned an error
    }
  };

   request.onerror = function() {
     // There was a connection error of some sort
   };

   request.send();

})();
