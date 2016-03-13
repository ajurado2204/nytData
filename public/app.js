/**
 * Created by Ale on 3/13/16.
 */
$(document).ready(function(){

  $.getJSON("/displayInfo", function(response) {
    $("tbody").empty();
    response.forEach(function(news) {
      var newTr = "<tr>";
      newTr += "<td>" + news.headline + "</td>";
      newTr += "<td><a href=" + 'news.articleLink' + ">" + news.articleLink + "</a></td>";
      newTr += "<td>" + news.summary + "</td>";
      newTr += "</tr>";
      $("tbody").append(newTr);

    });
  });
});
