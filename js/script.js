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


