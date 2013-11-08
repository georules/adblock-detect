(function(window, undefined) {
var Adblocked = function() {

this.result = "unknown";
this.scriptFile = "http://pagead2.googlesyndication.com/pagead/show_ads.js";
this.adScript = document.createElement("script")

this.insert = function() {
  var body = document.getElementsByTagName('body')[0]
  var ad = document.createElement("div")
  ad.style.display = "none";
  this.adScript.setAttribute("type","text/javascript")
  this.adScript.setAttribute("src",this.scriptFile)
  body.appendChild(ad).appendChild(this.adScript)

  return this
};

this.check = function() {
  if (typeof(window.google_ad_block) !== undefined)  {
    this.result = false
  }
  else {
    this.result = true
  }
  return this
};

return this;
}

var a = new Adblocked()
a.insert().check()

window.adblocked = function() {
  return a.result;
}

})(window)



