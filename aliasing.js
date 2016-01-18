//66.249.64.0 - 66.249.95.255
//207.46.0.0 - 207.46.255.255
//157.54.0.0 - 157.60.255.255
//104.208.0.0 - 104.215.255.255
//130.193.51.0 - 130.193.51.255
//141.8.183.0 - 141.8.183.255
function addAliasses() {
  var $ips_panel = $('*:contains("clientip table")').last().closest('dashboard-panel');

  if ($ips_panel.length == 0) {
    return;
  }

  var aliases = {
    'MS': '(207\.46\.[0-9]{1,3}\.[0-9]{1,3})|' +
          '(157\.(5[4-9]|60?)\.[0-9]{1,3}\.[0-9]{1,3})|' +
          '(104\.(20[8-9]|21[0-5])\.[0-9]{1,3}\.[0-9]{1,3})',
    'GOOGLE': '(66\.249\.(6[4-9]|7[0-9]|8[0-9]|9[0-5])\.[0-9]{1,3})',
    'YANDEX': '(130\.193\.51\.[0-9]{1,3})|'+
              '(141\.8\.(142|183)\.[0-9]{1,3})'
  };

  for (bot_name in aliases) {
    var pattern = aliases[bot_name];
    var re = new RegExp(pattern, "gi");

    $.each($ips_panel.find('td.cell-hover'), function(i, e){
      var $elem = $(e);
      $elem.text( $elem.text().replace(re, '$& [' + bot_name + ']') );
    });
  }
}

(function(window) {
  "use strict";

  setTimeout( addAliasses , 8000);
})(window);
