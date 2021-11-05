var myNav = document.querySelector('#navbar');
let scrollery = this.window.pageYOffset ;
window.addEventListener("scroll", function(){
    scrollery = this.window.pageYOffset ;
    myNav.classList.toggle('scrolled', scrollery >0);
    console.log('work' + scrollery);
})