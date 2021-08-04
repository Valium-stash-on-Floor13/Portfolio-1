
const body= document.querySelector('body');
const navbar = document.querySelector('.navbar');
const home=  document.querySelector('.home');



document.addEventListener('scroll', e=>{
    if( window.innerWidth>768 && window.pageYOffset<100){
        navbar.style.background="transparent";
        navbar.style.boxShadow="none";
    }

    else {
        
        navbar.style.background="rgb(3, 4, 39)";
        navbar.style.boxShadow="0 0 40px rgb(3, 4, 39)";
        navbar.style.transition="all 400ms ease-in-out"

        
       
    }
    
});

