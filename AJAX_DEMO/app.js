$(document).ready(function(e) {
  //list for button click
  // get repos with ajax request
  //success ==> append repos
  // error ==> display error message

  $(".fetch-btn").on("click", function(){
    var user = $("#username").val();

    $.ajax({
      type: "get" ,
      url: `https://api.github.com/users/${user}/repos`,
      success: function(data){
        console.log(data)
        \\ github will send back many information we call it generally by data
        $('#repos').empty();
        data.forEach(function(x){
          // json object >> forEach     Jquery object >> from selector >> each
          $("#repos").append(`<li>${x.fillname})</li>`)
        })
      },

      error: function(x) {
        // u will get a error message back  you can access json value by .keyName
        console.log(x);
        $('#repos').empty().append(x.statusText);
      },

    })
  })
})
