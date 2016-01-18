function addAliasses() {
  var $ips_panel = $('*:contains("ip table")').last().closest('dashboard-panel');

  if ($ips_panel.length == 0) {
    return;
  }

  $.each($ips_panel.find('td.cell-hover'), function(i, e){
      var $elem = $(e);
      var ip = $elem.text();

      $.ajax({
        url: "https://whois.arin.net/rest/nets;q=" + ip + "?showDetails=true&showARIN=false&ext=netref2",
        dataType: 'xml',
        crossDomain: true
      }).done(function(data) {
        $elem.text( ip + ' [' + $(data).find('orgRef').attr('name') + ']');
      });
  });
}

(function(window) {
  "use strict";

  setTimeout( addAliasses , 8000);
})(window);
