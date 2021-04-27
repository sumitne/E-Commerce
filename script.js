let submit = document.querySelector(".submit");
submit.addEventListener("click", function(e){
    window.location = "welcome.html";
})
let fields = document.querySelectorAll(".credential");
for(let i=0;i<fields.length;i++){

fields[i].addEventListener("click" , function(e){
    if(e.currentTarget.innerHTML=="Email" || e.currentTarget.innerHTML=="Password")
         e.currentTarget.innerHTML="";
})
}
