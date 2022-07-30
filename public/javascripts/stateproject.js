$(document).ready(function () {
  $.getJSON("http://localhost:3000/statecity/fetchallstates", function (data) {
    //alert(JSON.stringify(data));
    if (data.status) {
      data.result.map((item) => {
        //alert(item.statename);
        $("#state").append(
          $("<option>").text(item.statename).val(item.stateid)
        );
      });
      $("#state").formSelect();
    } else {
      alert("Server Error!");
    }
  });
  $("#state").change(function () {
    $.getJSON(
      "http://localhost:3000/statecity/fetchallcities",
      { stateid: $("#state").val() },
      function (data) {
        //alert(JSON.stringify(data));
        if (data.status) {
          $("#city").empty();
          $("#city").append($("<option>").text("Choose your city"));
          data.result.map((item) => {
            //alert(item.statename);
            $("#city").append(
              $("<option>").text(item.cityname).val(item.cityid)
            );
          });
          $("#city").formSelect();
        } else {
          alert("Server Error!");
        }
      }
    );
  });
});
