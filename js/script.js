
	const menuBtn = document.querySelector(".menu-icon span");
	const searchBtn = document.querySelector(".search-icon");
	const cancelBtn = document.querySelector(".cancel-icon");
	const items = document.querySelector(".nav-items");
	const form = document.querySelector("form");
	menuBtn.onclick = ()=>{
	  items.classList.add("active");
	  menuBtn.classList.add("hide");
	  searchBtn.classList.add("hide");
	  cancelBtn.classList.add("show");
	}
	cancelBtn.onclick = ()=>{
	  items.classList.remove("active");
	  menuBtn.classList.remove("hide");
	  searchBtn.classList.remove("hide");
	  cancelBtn.classList.remove("show");
	  form.classList.remove("active");
	  cancelBtn.style.color = "#ff3d00";
	}
	searchBtn.onclick = ()=>{
	  form.classList.add("active");
	  searchBtn.classList.add("hide");
	  cancelBtn.classList.add("show");
	}

/* video script  */
    $('.video').parent().click(function () {
  if($(this).children(".video").get(0).paused){        $(this).children(".video").get(0).play();   $(this).children(".playpause").fadeOut();
    }else{       $(this).children(".video").get(0).pause();
  $(this).children(".playpause").fadeIn();
    }
});
document.getElementById("myimg").addEventListener("click",function()
{
    var mybox=document.getElementById("myvideo");
    if(
        mybox.style.display=="none"
    )
    {
        mybox.style.display="block";
    }
    else
    {
        mybox.style.display="none";
    }
}
);

// carousel
$(".slider").owlCarousel({
	loop: true,
	autoplay: true,
	autoplayTimeout: 2000, //2000ms = 2s;
	autoplayHoverPause: true,
  });

// scroll to top
  var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0.5;
  document.documentElement.scrollTop = 0.5;
}

 