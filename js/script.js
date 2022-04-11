console.log(`%c
                                                        \n\
                  _/            _/  _/        _/        \n\
                 _/    _/_/_/      _/  _/               \n\
                _/  _/    _/  _/  _/_/      _/          \n\
         _/    _/  _/    _/  _/  _/  _/    _/           \n\
          _/_/      _/_/_/  _/  _/    _/  _/            \n\
                                                        \n\
`, "background: #133337; color: #ccc; font-size: 15px;padding: 1px;font-family: monospace;");
console.log("%c             Welcome to my website 🤠👍              ", "background: #133337; color: #ccc; font-size: 15px;padding: 15px;font-family: monospace;");
function openbox(id){
    var el = document.getElementById('card'+id);

    if(el.hidden){
      document.querySelectorAll('.card').forEach(card => card.hidden = true);
      el.hidden = false;
    }
}

/*function portfolioShow(){
    var portfolio = document.getElementById("portfolio");
    var about = document.getElementById("about");
    if (portfolio.style.display == "flex") {
        portfolio.style.display = "none";
        about.style.display = "block";
    } else {
        portfolio.style.display = "flex";
        about.style.display = "none";  
    }
}*/


// SLIDESHOW
let slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n) {
    showSlide(slideIndex+=n);
}
function previousSlide(n) {
    showSlide(slideIndex-=n);
}

function showSlide(n) {
    var slides = document.getElementsByClassName("cardContent");
    var i;
    if(n>slides.length) {
        slideIndex=1;
    }
    if(n<1) {
        slideIndex=slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
    
}
