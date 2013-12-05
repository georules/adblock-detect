(function(window, undefined) {

function Adblocked() {
  this.scriptFile = "//pagead2.googlesyndication.com/pagead/show_ads.js";
}

Adblocked.prototype.isAdblocked = function() {
  if (typeof(window.google_ad_block) === "undefined") {
    return true;
  }
  else {
    return false;
  }
}

Adblocked.prototype.done = function(ctx) {
  ctx = (typeof(ctx) === "undefined") ? this : ctx 
  if (ctx.isAdblocked())  {
    window.adblocked.result = true
  }
  else {
    window.adblocked.result = false
  }
  var error = null;
  window.adblocked.userCallback(error, window.adblocked.result)
}

Adblocked.prototype.insert = function() {
  var body = document.getElementsByTagName('body')[0]
  var ad = document.createElement("div")
  ad.style.display = "none";
  adScript = document.createElement("script")
  adScript.setAttribute("type","text/javascript")
  adScript.setAttribute("src",this.scriptFile)
  body.appendChild(ad).appendChild(adScript)
  that = this
  adScript.onload = function() {that.done(that)};
  adScript.onerror = adScript.onload;
  return this
}

var checkAds = function(userCallback) {
  if (typeof(userCallback) !== "undefined") { 
    window.adblocked.userCallback = userCallback
  }
  var a = new Adblocked()
  // if it appears that ads are blocked already
  if (a.isAdblocked()) {
    a.insert() // attempt to load ads
  }
  // if ads have already loaded
  else {
    a.done()    
  }
}

window.adblocked = {
  check : checkAds,
  userCallback : function() {},
  result : "unknown"
}

})(window)
