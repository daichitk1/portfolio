// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
const semi_title = document.querySelectorAll('.semi-title');

const showTitle = (entries) => {
    const keyframes = [
        { opacity: 0, transform: 'translate(30px, 0)' },
        { opacity: 1, transform: 'translate(0, 0)' }
    ];
    const options = {
        duration: 2000,
        fill: 'forwards',
        threshold: 0,
    };
    entries[0].target.animate(keyframes, options);
};

const titleObserver = new IntersectionObserver(showTitle);

semi_title.forEach((one_title)=> {
    titleObserver.observe(one_title);
});

const btn = document.getElementById("top-btn");

btn.addEventListener("click", () =>{
    window.scroll({
        top: 0,
    });
});

const menu_btn = document.getElementById("menu-btn");
const side_bar = document.querySelector('.on-side-bar');
menu_btn.addEventListener("click", () =>{
    side_bar.classList.toggle('on-side-bar');
});

$(document).ready(function(){
    $('.news').slick({
        infinite: true,
        speed: 3000,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
    });
  });


  VANTA.NET({
    el: "#goal",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xb7d3e8,
    backgroundColor: 0xffffff,
    points: 8.00,
    maxDistance: 16.00,
    spacing: 13.00
  })