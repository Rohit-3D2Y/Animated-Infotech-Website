

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.1
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.2,
        stagger: 0.2
    })
}
document.addEventListener("DOMContentLoaded", function() {
     loadingAnimation();
});

// Pop-up Content from page 2 //

document.querySelectorAll(".hover-span").forEach((item, index) => {
    item.addEventListener('click', function() {
        const popup = document.querySelector('.popup');
        const popupHeading = document.getElementById('popup-heading');
        const popupContent = document.getElementById('popup-content');
        popup.style.display = 'block';
        // Update content based on which hover span is clicked
        switch (index) {
            case 1: // second hover span clicked
                popupHeading.textContent = "second Hover Span Content";
                popupContent.textContent = "content for second hover span";
                break;
            case 2: // third hover span clicked
                popupHeading.textContent = "third Hover Span Content";
                popupContent.textContent = "Content for third hover span";
                break;
            case 3: // fourth hover span clicked
                popupHeading.textContent = "fourth Hover Span Content";
                popupContent.textContent = "Content for fourth hover span";
                break; 
            // Add more cases for other hover spans if needed
            default:
                popupHeading.textContent = "Effective Design principles for cryptocurrency trading interfaces";
                popupContent.textContent = "My name is Rohit lorem Rohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit loremRohit lorem";
        }
    });
});

document.querySelectorAll('.close-btn').forEach(item => {
    item.addEventListener('click', function() {
        const popup = this.parentElement;
        popup.style.display = 'none';
    });
});


// Play-button //

let clickBtn = document.querySelector('.play-btn img');
let showHeading = document.querySelector(".heading")

clickBtn.addEventListener('mouseenter', () => {
    showHeading.style.display = 'block';
});

clickBtn.addEventListener('mouseleave', function() {
    showHeading.style.display = 'none';

});

// Video playing animation //

function page3VideoAnimation() {

    let video = document.querySelector("#page3 video")

    clickBtn.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}
page3VideoAnimation();

// Hover-effect on Accern Rhea / A moving circle along with the mouse for a particular div or an element //

let vidSecs = document.querySelectorAll(".sec-right video")
vidSecs.forEach(function(vidSec){

    vidSec.addEventListener('mouseenter', function () {

        vidSec.style.opacity = 1
        vidSec.play()
    } );
    
    vidSec.addEventListener("mouseleave", ()=> {
    
        vidSec.style.opacity = 0
        vidSec.load()
        
    });
});

 // rotating arrows //

 let elementToRotate = document.querySelector(".accord-1");
let selectElem = document.querySelector(".round");

elementToRotate.addEventListener("click", function() {
    selectElem.classList.toggle("rotated"); // Toggle the "rotated" class on click
});

let elementToRotate2 = document.querySelector(".accord-2");
let selectElem2 = document.querySelector(".round-2");

elementToRotate2.addEventListener("click", function() {
    selectElem2.classList.toggle("rotated"); // Toggle the "rotated" class on click
});

// new-divs when clicked on accord-1 //
let accordExtra = document.querySelector(".accord-1-extra");
let isExpanded = false;

elementToRotate.addEventListener("click", () => {
    if (!isExpanded) {
        accordExtra.style.display = 'block';
        setTimeout(() => {
            accordExtra.style.transform = 'translateX(0)'
        }, 10);
    } else {
        accordExtra.style.transform = 'translateX(-20%)';
        setTimeout(() => {
            accordExtra.style.display = 'none';

        }, 10); // Adjust the delay to match the transition duration
    }
    isExpanded = !isExpanded;
});
