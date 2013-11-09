(function(window, undefined) {


var checkAds = function(userCallback) {
  window.adblocked.userCallback = userCallback
  var a = new Adblocked()
  a.insert()
}

var done = function() {
  if (typeof(window.google_ad_block) === "undefined")  {
    window.adblocked.result = true
  }
  else {
    window.adblocked.result = false
  }
  window.adblocked.userCallback()
}

window.adblocked = {
  check : checkAds,
  userCallback : function() {},
  callback : done,
  result : "unknown"
}

var Adblocked = function() {

this.scriptFile = "http://pagead2.googlesyndication.com/pagead/show_ads.js";
this.adScript = document.createElement("script")

this.insert = function() {
  var body = document.getElementsByTagName('body')[0]
  var ad = document.createElement("div")
  ad.style.display = "none";
  this.adScript.setAttribute("type","text/javascript")
  this.adScript.setAttribute("src",this.scriptFile)
  body.appendChild(ad).appendChild(this.adScript)
  this.adScript.onload = adblocked.callback;
  this.adScript.onerror = adblocked.callback;

  return this
};

return this;

}

var a = new Adblocked()
a.insert()

})(window)



