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
      newDiv += "<a href=" + news.articleLink + ">" + "<span>Link: </span>" + news.articleLink + "</a>";
      newDiv += "<p>"+ "<span>Summary: </span>" + news.summary+"</p>";
      var count = news.notes.length;

      if(count === 0 || count === undefined){
        newDiv += "<form action='/submit' method='post'>"
          + "<input type='hidden' name='articleId' id='articleInput' value=" + news._id + ">"
          + "<textarea class='form-control' rows='3' name='body'>"
          + "Notes...</textarea></br>"
          + "<button type='submit' name='button' class='btn btn-default'>Submit</button></form>";
        newDiv += "</div>";
        newDiv += "</div>";
        newDiv += "</div>";

        $(".two").append(newDiv);
      }
      else{
        news.notes.forEach(function(note){

          if(count-- > 0){
            newDiv += "<form action='/delete' method='post'>"
              +"<p>"+note.thenote+"</p>"
              +"<input type='hidden' name='articleId' id='articleInput' value=" + news._id + ">"
              +"<input type='hidden' name='noteId' id='noteInput' value=" + note._id + ">"
              +"<button type='submit' name='button' class='btn btn-default'>Remove</button></form></br>";
          }

          if(count === 0){
            newDiv += "<form action='/submit' method='post'>"
              + "<input type='hidden' name='articleId' id='articleInput' value=" + news._id + ">"
              + "<textarea class='form-control' rows='3' name='body'>"
              + "Notes...</textarea></br>"
              + "<button type='submit' name='button' class='btn btn-default'>Submit</button></form>";
            newDiv += "</div>";
            newDiv += "</div>";
            newDiv += "</div>";

            $(".two").append(newDiv);
          }
        });
      }
    });
  });

});


