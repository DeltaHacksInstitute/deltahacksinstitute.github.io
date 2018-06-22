function rotate(x) {
    x.classList.toggle("change");
    $(".navcircle2").toggleClass("middle");
    $("#expand").slideToggle("fast");
    $("#navbar1 ul").toggleClass("fullheight");
}


$(document).ready(function() {
    $("#scroll1").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#intro").offset().top
                }, 800);
    });
});

$(document).ready(function() {
    $("#scroll2").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#upcoming").offset().top - 60
                }, 800);
    });
});

$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + 600) {
          $(this).addClass("slide2");
        }
    });
  });

$(window).scroll(function() {
    $(".slideanim2").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + 600) {
          $(this).addClass("slide6");
        }
    });
  });

  $(document).ready(function(){
                $("#tom").click(function(){
                    $("#tomhid").slideToggle("fast");
                });
            })

  $(document).ready(function(){
                $("#gautham").click(function(){
                    $("#gauthamhid").slideToggle("fast");
                });
            })


  $(window).scroll(function() {
  		if($(window).scrollTop() > 20) {
  			$("#navbar1 ul").css("padding", "15px 0px");
  		} else {
  			$("#navbar1 ul").css("padding", "25px 0px");
  		}
  });

$(window).scroll(function() {
    var winTop = $(window).scrollTop();

    $("#indexhead").css({
    'margin-top' : winTop/2
    });
    $("#abouthead").css({
    'background-size' : (140 + winTop/3) + "%"
    });

    $("#mission").css({
    'background-size' : (100 + winTop/3) + "%"
    });
});



