!function(o){function t(s){if(e[s])return e[s].exports;var n=e[s]={exports:{},id:s,loaded:!1};return o[s].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var e={};return t.m=o,t.c=e,t.p="dest",t(0)}([function(o,t,e){"use strict";var s=e(1);onmessage=function(o){s("https://gis.dola.colorado.gov/lookups/jobsYRS",function(o){var t="2022";s("https://gis.dola.colorado.gov/lookups/jobs?&year="+t+"&county=1,3,5,7,9,11,13,14,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125&sector=0,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,10150,11000,11025,11050,12000,12015,13000,13015,14000,15000",function(t){postMessage([t,o]),close()})})}},function(o,t){"use strict";o.exports=function(o,t){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){var o=JSON.parse(e.responseText);t&&t(o)}},e.open("GET",o),e.send()}}]);
