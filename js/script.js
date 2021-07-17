window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector(".disp").style.opacity="0";
    document.querySelector("#arrow").style.opacity="0";
  } 
  else{
  	document.querySelector(".disp").style.opacity="1";
  	document.querySelector("#arrow").style.opacity="1";
  }

}

function movepage(){
  event.PreventDefault();
  var destination = document.getElementById("destinations");
  var country_f = destination.value;

  var page_name = "https://dahyeon45.github.io/photo-archive/"+ country_f +".html";
  window.location.assign = "../Denmark.html";

  return false;
}

