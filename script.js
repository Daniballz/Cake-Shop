// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

let hint = document.querySelector('#myLinks');
let btn = document.querySelector('.icon');

btn.addEventListener('click', function(){
  let ctr = 1;
  hint.className = hint.className !== 'show' ? 'show' : 'hide';
  if (hint.className === 'show') {
    hint.style.display = 'block';
    window.setTimeout(function(){
      hint.style.opacity = 1;
      hint.style.transform = 'scale(1)';
    },0);
  }
  if (hint.className === 'hide') {
    hint.style.opacity = 0;
    hint.style.transform = 'scale(0)';
    window.setTimeout(function(){
      hint.style.display = 'none';
    },700); // timed to match animation-duration
  }
 
});


// #hint {
//   background: yellow;
//   color: red;
//   padding: 16px;
//   margin-bottom: 10px;
//   opacity: 0;
//   transform: scale(0);
//   transition: .6s ease opacity,.6s ease transform;
// }
// <div id="hint" style="display: none;">
//   <p>This is some hint on how to be safe in this community </p>
//   <p>This is another hint on how to be safe in this community </p>
// </div>

// <button id="btn_show"> Show hint </button>