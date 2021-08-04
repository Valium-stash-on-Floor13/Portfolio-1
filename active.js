const sections= document.querySelectorAll('section');
const navs=document.querySelectorAll('.navbar ul li a');





document.addEventListener('scroll',()=>{
    let current="";
    let current_a="";
    let current_final="";
    
    
    sections.forEach(section=>{
        const sectionTop=section.offsetTop;
        const sectionHeight=section.clientHeight;
        
        if(pageYOffset>=sectionTop -sectionHeight/3){
             current=section.getAttribute('id');
            navs.forEach(nav=>{
              current_a=nav.getAttribute('href');
                current_final=current_a.substring(1);
               if(current_final===current){
                navs.forEach(nav=>{
                    nav.classList.remove('active');
                }) 
               nav.classList.add('active');
               }              
            })
        }
    })
        
       
})










