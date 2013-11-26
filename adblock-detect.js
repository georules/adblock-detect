(function(window, undefined) {

var Adblocked = function() {

that = this

this.scriptFile = "//pagead2.googlesyndication.com/pagead/show_ads.js";
this.adScript = document.createElement("script")

this.isAdblocked = function() {
  if (typeof(window.google_ad_block) === "undefined") {
    return true;
  }
  else {
    return false;
  }
}
this.done = function() {
  if (that.isAdblocked())  {
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
  if (typeof(userCallback) !== "undefined") { 
    window.adblocked.userCallback = userCallback
  }
  var a = new Adblocked()
  // double check, in case google ads are not the ads currently used
  if (that.isAdblocked()) {
    a.insert()
  }
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
