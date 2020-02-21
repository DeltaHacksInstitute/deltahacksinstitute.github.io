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

          $("#question2").click(function(){
              $("#answer2").slideToggle("fast");
          });

          $("#question3").click(function(){
              $("#answer3").slideToggle("fast");
          });

          $("#question4").click(function(){
              $("#answer4").slideToggle("fast");
          });

          $("#question5").click(function(){
              $("#answer5").slideToggle("fast");
          });

          $("#question6").click(function(){
              $("#answer6").slideToggle("fast");
          });

          $("#question7").click(function(){
              $("#answer7").slideToggle("fast");
          });

          $("#dots").click(function(){
              $("#mainnav").slideToggle("fast");
              $(".deltalogo").toggleClass("middle");
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
    var winTop = $(window).scrollTop();

    $("#indexhead").css({
    'margin-top' : winTop/3
    });
    $("#eventshead").css({
    'top' : winTop/3
    });
    $("#greybackground").css({
      'height' : 100-winTop/60 + "%"
    });
    $("#greybackground2").css({
      'top' : 60-winTop/8
    });
    $("#timeline").css({
      'height' : 120 + winTop
    });
    $("#circle").css({
      'top' : 180 + winTop
    });
    var jesus = winTop + 180 + $("#eventbody").offset().top;
    $( ".eventcircle" ).each(function(index) {
      var god = $(this).offset().top;
      if(god < jesus) {
        $(this).css("transform", "scale(1)");
      } else {
        $(this).css("transform", "scale(0)");
      }
    });


});

var tom = "<h1>Tom Zhang</h1> <h3>Founder, President</h3> <p>Tom is a junior at Monta Vista High School. He has tons of experience competing at hackathons, winning awards at six of them. Tom is in the Gold division of the USA Computing Olympiad, and has experience creating production-level Android apps and machine learning algorithms. When he isn't coding, Tom participates in Monta Vista Speech and Debate and volunteers with Leo Club. He also helps with research at Berkeley as a Machine Learning intern.</p>";
var gautham = "<h1>Gautham Raghupathi</h1> <h3>Founder, President</h3> <p>Gautham is a junior at Monta Vista High School. He began to compete in hackathons right when he was eligible to do so, in the summer after 8th grade. He initially attended hackathons for the swag; however, hackathons molded him into an all-round coder, even resulting in him winning awards at six hackathons. Gautham is also an active member of various organizations such as Technology Student Association, FRC Team #299: Valkyrie Robotics, and Silicon Valley Forensics. Aside from this, he enjoys playing tennis, playing the flute, and watching the latest Marvel movies.</p>";
var sam = "<h1>Sam Yang</h1> <h3>Vice President of Technology</h3> <p>Sam is an avid web designer and programmer, with experience in HTML, CSS, Javascript, Bootstrap, jQuery, Firebase, React, Node and PHP.  His work includes Silicon Valley Forensics, Silicon Valley Youth, Senior Tech Assistance Initiative, EngAcademy, InstaTutors, HSHacks, MatadorHacks and more.  He is also a current co-president of Silcion Valley Youth.  Outside of his work, he enjoys playing the guitar, singing and playing baseball.</p>";
var carter = "<h1>Carter Bian</h1> <h3> Director of Operations</h3> <p>Carter is a junior at Cupertino High School. He participates in USACO Gold competitions, summer programs, and side projects. Outside of coding, Carter has found ways to pursue his hobbies in school by being part of Cupertino High’s Varsity badminton team and president of CHS Cooking Club. Recently, Carter has joined Silicon Valley Youth as a teacher to help encourage middle to early high school students to be interested in STEM. </p>";
var sarthak = "<h1>Sarthak Kamat</h1> <h3> Director of Workshops</h3> <p>Sarthak is a junior at Monta Vista High School. </p>";

function bio(name) {
  $("#bio").fadeIn();
  $("#cover").fadeIn();
  $("#bio #text").html(name);
}

function cancel() {
  $("#bio").fadeOut();
  $("#cover").fadeOut();
}



function eventA() {
  if($( window ).width() > 1024) {
    $("#eventA").css("width", "50%");
    $("#eventB").css("width", "30%");
    $("#eventA .eventtitle").css("font-size", "35px");
    $("#eventB .eventtitle").css("font-size", "25px");
  }
}

function eventB() {
  if($( window ).width() > 1024) {
    $("#eventB").css("width", "50%");
    $("#eventA").css("width", "30%");
    $("#eventB .eventtitle").css("font-size", "35px");
    $("#eventA .eventtitle").css("font-size", "25px");
  }
}

function xout() {
  $("#wkshpmask").fadeOut();
  $( ".workshoptext" ).each(function(index) {
    $(this).fadeOut();
  });
}

function openwkshp(name) {
  $("#wkshpmask").fadeIn();
  $("#" + name).fadeIn();
}
