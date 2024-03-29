// // Get a reference to the <path>
// let path = document.querySelector('#frontendor-path');

// // Get length of path... ~577px in this case
// let pathLength = path.getTotalLength();

// // Make very long dashes (the length of the path itself)
// path.style.strokeDasharray = pathLength + ' ' + pathLength;

// // Offset the dashes so the it appears hidden entirely
// path.style.strokeDashoffset = pathLength;

// // Jake Archibald says so
// // https://jakearchibald.com/2013/animated-line-drawing-svg/
// path.getBoundingClientRect();

// // When the page scrolls...
// window.addEventListener("scroll", function(e) {
 
//   // What % down is it? 
//   // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
//   // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
//   var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
//   // Length to offset the dashes
//   var drawLength = pathLength * scrollPercentage;
  
//   // Draw in reverse
//   path.style.strokeDashoffset = pathLength - drawLength;
    
//   // When complete, remove the dash array, otherwise shape isn't quite sharp
//  // Accounts for fuzzy math
//   if (scrollPercentage >= 0.99) {
//     path.style.strokeDasharray = "none";
    
//   } else {
//     path.style.strokeDasharray = pathLength + ' ' + pathLength;
//   }
  
// });

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);