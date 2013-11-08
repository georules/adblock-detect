(function(window, undefined) {
var adblocked = function() {
  function adblocked() {
    this.result = "unknown"
  }  

  this.insert = function() {
    var body = document.getElementsByTagName('body')[0]
    var ad = document.createElement("div")
    ad.style.display = "none";
    var adScript = document.createElement("script")
    adScript.setAttribute("type","text/javascript")
    adScript.setAttribute("src","http://pagead2.googlesyndication.com/pagead/show_ads.js")

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



