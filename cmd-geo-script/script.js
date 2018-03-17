(function() {
  const setting:{}
  const app = {
    init: function() {},
    set:function(){}
  }

  // POSITION
  const position = {
    set: function() {
      helper.isnumber('1')
      this.check()
    },
    check: function() {
      const el = document.body;
      this.set()

      el.addListener('touchstart', () =>{
        this.update()
      })
    },
    update: function() {},
    set: function() {},
  }

  // MAP
  const gMap = {
    generate:  function() {},
    update: function() {},
  }


  // HELPER
  const helper = {
    isNumber: function() {},
    getElement: function() {
      return document.querySelector('element')
    },
    getElements: function() {
      return document.querySelectorAll('element')
    },
  }

  const $ = helper.getElement()
  // DEBUG

})()

app.init()
