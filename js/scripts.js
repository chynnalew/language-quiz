$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const age = parseInt($("#age").val());
    const school = parseInt($("input:radio[name=subject]:checked").val());
    const season = parseInt($("input:radio[name=seasons]:checked").val());
    const activity = parseInt($("input:radio[name=activities]:checked").val());
    const color = parseInt($("input:radio[name=colors]:checked").val());
    const all = age + color + activity + season+ school;

    if (all >= 0 && all < 70) {
      $("#html").show();
      $("#sql").hide();
      $("#cSharp").hide();
      $("#python").hide();
      $("#steve").hide();
      $("#quiz").fadeToggle("slow");
     
    }
    else if (all >=70 && all <130) {
      $("#html").hide();
      $("#sql").show();
      $("#cSharp").hide();
      $("#python").hide();
      $("#steve").hide();
      $("#quiz").fadeToggle("slow");
      
    }
    else if (all >= 130 && all <200) {
      $("#html").hide();
      $("#sql").hide();
      $("#cSharp").show();
      $("#python").hide();
      $("#steve").hide();
      $("#quiz").fadeToggle("slow");
     
    }
    else if (all >=200 && all < 2000) {
      $("#html").hide();
      $("#sql").hide();
      $("#cSharp").hide();
      $("#python").show();
      $("#steve").hide();
      $("#quiz").fadeToggle("slow");
    }
    else {
      $("#html").hide();
      $("#sql").hide();
      $("#cSharp").hide();
      $("#python").hide();
      $("#quiz").fadeToggle("slow");
      $("#steve").show();
    }

    $(".yourName").text(name);
  });

  $("h2").append(">");
  $("h2").prepend("<");
  $("h3").append(">");
  $("h3").prepend("<");
  $("label").prepend(">");
  $("p").prepend(">");
})