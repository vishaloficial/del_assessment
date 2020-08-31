var mydata = {}


$(window).on('load', function() {
    $('#overlay').fadeIn();
   
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/',
      crossDomain: true,
      headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000/'
      },
      dataType: 'json', //to parse string into JSON object,
      success: function(data) {
          if (data) {
              removeLoader()
              mydata = data;

              var divId = document.getElementById("json")



              for (var i = 0; i < mydata.length; i++) {

                  var div = document.createElement("div");
                  div.id = "divid" + i;
                  div.className = "square zoom";
                  divId.appendChild(div);
                  var imageParent = document.getElementById(div.id);
                  if (mydata[i].imgUrl) {
                      var imgurl = mydata[i].imgUrl;
                      var image = document.createElement("img");

                      image.id = "id";

                      image.src = imgurl;

                      image.alt = "alternative text" 
                      imageParent.appendChild(image);
                      var imgurl = mydata[i].imgUrl;


                  } else {
                      var h3 = document.createElement("h3");
                      h3.id = "h3id";

                      h3.innerHTML = 'Error Fetching Image'

                      imageParent.appendChild(h3);
                  }
                  var h5 = document.createElement("h5");
                  h5.id = "hid";

                  h5.innerHTML = mydata[i].name;
                  // image.src = "IMAGE URL/PATH"
                  imageParent.appendChild(h5);


                  var p = document.createElement("p");
                  p.id = "pid";
                  p.className = "class";
                  p.innerHTML = mydata[i].price + "$";
                  // image.src = "IMAGE URL/PATH"
                  imageParent.appendChild(p);

              }
          }
      },
      error: function(jqXHR, textStatus, errorThrown) {
          alert('error: ' + textStatus + ': ' + errorThrown);
      }
  });

  return false;
  
});

function removeLoader() {
    $('#overlay').fadeOut();

}

$(document).ready(function() {

    
});