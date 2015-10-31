NOTE 10/31/2015
---------------
This project has not been maintained in 2 years.  The mechanism for adblock detection used in this project is no longer functional.  If you have a suggestion for a better mechanism, please send a pull request!
https://github.com/georules/adblock-detect/issues/2

adblock-detect
==============

This is a small script to help detect if someone is running adblock.  adblocked.result will be:
+ true if adblock is running
+ false if adblock is not running
+ 'unknown' if the test does not run properly

example use
-----------
test.html gives an example: <http://georules.github.io/adblock-detect/test.html>

```
<script src="adblock-detect.js" type="text/javascript"></script>
<script>
var adblocked = window.adblocked;
adblocked.check(function(error, result) {
  var output = "adblock is " + (result ? "running" : "not running");
  alert(output);
});
</script>
```

Note for real use
-------
If used, it should be compiled with another important script, as someone could simply adblock the detector script.

TODO
------
+ make use of a blocked script or filename that does not require checking against another server, or which might be used by the website to avoid double-loading.
+ remove 'unknown' output and instead provide an error (or maybe unknown resolving to true is ok?)

Contributing
---------
+ Please send pull requests to https://github.com/georules/adblock-detect
+ I am open to suggestions on any aspect of the project!
