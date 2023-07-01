let bar = document.querySelector("#bars");
let nav_links = document.querySelector(".nav-links");
bar.addEventListener("click" ,function(){
    // alert(123)
    nav_links.classList.toggle("show");
});