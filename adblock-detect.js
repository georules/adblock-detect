(function(window, undefined) {
var adblocked = function() {
  function adblocked() {
    this.result = "unknown";
    this.scriptFile = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.js";
  }  

  this.insert = function() {
    var body = document.getElementsByTagName('body')[0]
    var ad = document.createElement("div")
    ad.style.display = "none";
    var adScript = document.createElement("script")
    adScript.setAttribute("type","text/javascript")
    var script = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.js";
    adScript.setAttribute("src",script)

    body.appendChild(ad).appendChild(adScript)

    return this
  };

  this.check = function() {
    result = true
    return this
  };

  window.adblocked = function() {
    return result
  }
}

new adblocked().insert().check()

})(window)



