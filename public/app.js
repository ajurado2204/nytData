/**
 * Created by Ale on 3/13/16.
 */
$(document).ready(function(){

  $.getJSON("/displayInfo", function(response) {

    response.forEach(function(news) {
      var newDiv = "<div class='col-md-12'>";
      newDiv += "<div class='panel panel-default'>";
      newDiv += "<div class='panel-heading'>";
      newDiv += "<h3 class='panel-title'>"+news.headline+"</h3>";
      newDiv += "</div>";
      newDiv += "<div class='panel-body'>";
      newDiv += "<a href=" + news.articleLink + ">" + news.articleLink + "</a>";
      newDiv += "<p>"+news.summary+"</p>";
      newDiv += "<form action='/submit' method='post'>"
        + "<input type='hidden' name='articleId' id='articleInput' value=" + news._id + ">"
        + "<textarea class='form-control' rows='3' name='body'>"
        + "Write Note Here</textarea></br>"
        + "<input type='submit' class='btn btn-default'></form>";

      newDiv += "</div>";
      newDiv += "</div>";
      newDiv += "</div>";



      $(".container").append(newDiv);

    });
  });
});
