const navSlide =() => {
const hamburger=document.querySelector('.hamburger');
const nav=document.querySelector('.nav-links');
const navLinks=document.querySelectorAll('.nav-links li');
const navBar=document.querySelector('nav');




hamburger.addEventListener('click', ()=>{
    navBar.classList.toggle('nav-toggle')
    nav.classList.toggle('nav-active');
  

    navLinks.forEach((link, index)=>{
      
        if(link.style.animation){
            link.style.animation='';
        }
        else{
        
            link.style.animation=`nav-links-fade 0.5s ease forwards ${index/5 +0.5}s`;
        }
        });  
    
        hamburger.classList.toggle('toggle');
});


}

navSlide();
