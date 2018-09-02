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
                    scrollTop: $("#intro").offset().top + 20
                }, 800);
    });
});

$(document).ready(function(){
          $("#question1").click(function(){
              $("#answer1").slideToggle("fast");
          });
      });

$(document).ready(function(){
          $("#question2").click(function(){
              $("#answer2").slideToggle("fast");
          });
      });

$(document).ready(function(){
          $("#question3").click(function(){
              $("#answer3").slideToggle("fast");
          });
      });

$(document).ready(function(){
          $("#question4").click(function(){
              $("#answer4").slideToggle("fast");
          });
      });

$(document).ready(function(){
          $("#question5").click(function(){
              $("#answer5").slideToggle("fast");
          });
      });
$(document).ready(function(){
          $("#question6").click(function(){
              $("#answer6").slideToggle("fast");
          });
      });

$(document).ready(function(){
          $("#question7").click(function(){
              $("#answer7").slideToggle("fast");
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
    'margin-top' : winTop/3
    });
    $("#abouthead").css({
    'background-size' : (140 + winTop/3) + "%"
    });

    $("#eventshead").css({
    'top' : winTop/3
    });

    $("#mission").css({
    'background-size' : (100 + winTop/3) + "%"
    });
});

var tom = "<h1>Tom Zhang</h1> <h3>Founder, President</h3> <p>Tom is a junior at Monta Vista High School. He has tons of experience competing at hackathons, winning awards at six of them. Tom is in the Gold division of the USA Computing Olympiad, and has experience creating production-level Android apps and machine learning algorithms. When he isn't coding, Tom participates in Monta Vista Speech and Debate and volunteers with Leo Club. He also helps with research at Berkeley as a Machine Learning intern.</p>";
var gautham = "<h1>Gautham Raghupathi</h1> <h3>Founder, President</h3> <p>Gautham is a junior at Monta Vista High School. He began to compete in hackathons right when he was eligible to do so, in the summer after 8th grade. He initially attended hackathons for the swag; however, hackathons molded him into an all-round coder, even resulting in him winning awards at six hackathons. Gautham is also an active member of various organizations such as Technology Student Association, FRC Team #299: Valkyrie Robotics, and Silicon Valley Forensics. Aside from this, he enjoys playing tennis, playing the flute, and watching the latest Marvel movies.</p>";
var sam = "<h1>Sam Yang</h1> <h3>Vice President of Technology</h3> <p>Sam is an avid web designer and programmer, with experience in HTML, CSS, Javascript, Bootstrap, jQuery, Firebase, React, Node and PHP.  His work includes Silicon Valley Forensics, Silicon Valley Youth, Senior Tech Assistance Initiative, EngAcademy, Students and Seniors United and more.  He is also a current co-president of Silcion Valley Youth.  Outside of his work, he enjoys playing the guitar, singing and playing baseball.</p>";

function bio(name) {
  $("#bio").fadeIn();
  $("#cover").fadeIn();
  $("#bio #text").html(name);
}

function cancel() {
  $("#bio").fadeOut();
  $("#cover").fadeOut();
}


