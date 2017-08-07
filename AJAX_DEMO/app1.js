function jsonData () {
  // server will parse string
  return JSON.stringify(
    JsonData
    $("#description").val(),
    "content": $('#content').val();
  )
}

function createGist() {
  $.ajax({
    type: 'POST',
    url: "httpz://api.github.",
    data: ,
    success: function(){

    },
    error: function() {
      $('#result').addClass('error').html(x.)
    }
  })
}



$(document).ready(function(){
  
})
