let kids = document.querySelector(".op1");
let welcomeCont = document.querySelector(".welcome-container");
let img = 'url("1.jpg")';
kids.addEventListener("mouseover" , function(e){
   let style = getComputedStyle(welcomeCont);
   welcomeCont.style.backgroundImage = 'url("kid1.jpg")';
   
})
kids.addEventListener("mouseout" , function(e){
   let style = getComputedStyle(welcomeCont);
   welcomeCont.style.backgroundImage = img;
})
let men = document.querySelector(".op2");
men.addEventListener("mouseover", function(e){
   let style = getComputedStyle(welcomeCont);
   welcomeCont.style.backgroundImage ='url("men1.jpg")';

})
men.addEventListener("mouseout" , function(e){
   let style = getComputedStyle(welcomeCont);
   welcomeCont.style.backgroundImage = img;
})
let women = document.querySelector(".op3");
women.addEventListener("mouseover", function(e){
   let style = getComputedStyle(welcomeCont);
   welcomeCont.style.backgroundImage ='url("women1.jpg")';

})
women.addEventListener("mouseout" , function(e){
   let style = getComputedStyle(welcomeCont);
   welcomeCont.style.backgroundImage = img;
})
let ethnic = document.querySelector(".op4");
ethnic.addEventListener("mouseover", function(e){
   let style = getComputedStyle(welcomeCont);
   welcomeCont.style.backgroundImage ='url("ethnic1.png")';

})
ethnic.addEventListener("mouseout" , function(e){
   let style = getComputedStyle(welcomeCont);
   welcomeCont.style.backgroundImage = img;
})
let western = document.querySelector(".op5");
western.addEventListener("mouseover", function(e){
   let style = getComputedStyle(welcomeCont);
   welcomeCont.style.backgroundImage ='url("western1.jpg")';

})
western.addEventListener("mouseout" , function(e){
   let style = getComputedStyle(welcomeCont);
   welcomeCont.style.backgroundImage = img;
})
