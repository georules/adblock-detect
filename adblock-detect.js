(function(window, undefined) {

var Adblocked = function() {

this.scriptFile = "//pagead2.googlesyndication.com/pagead/show_ads.js";
this.adScript = document.createElement("script")

this.done = function() {
  if (typeof(window.google_ad_block) === "undefined")  {
    window.adblocked.result = true
  }
  else {
    window.adblocked.result = false
  }
  var error = null;
  window.adblocked.userCallback(error, window.adblocked.result)
}

this.insert = function() {
  var body = document.getElementsByTagName('body')[0]
  var ad = document.createElement("div")
  ad.style.display = "none";
  this.adScript.setAttribute("type","text/javascript")
  this.adScript.setAttribute("src",this.scriptFile)
  body.appendChild(ad).appendChild(this.adScript)
  this.adScript.onload = this.done;
  this.adScript.onerror = this.done;

  return this
};

return this;

}

var checkAds = function(userCallback) {
  window.adblocked.userCallback = userCallback
  var a = new Adblocked()
  a.insert()
}

window.adblocked = {
  check : checkAds,
  userCallback : function() {},
  result : "unknown"
}

})(window)
