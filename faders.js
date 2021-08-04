const sliders=document.querySelectorAll('.slide-in');
const faders=document.querySelectorAll('.fade-in');
const appearOptions={
threshold:0.4,
rootmargin:"0px 0px -100px 0px"
};
const appearOnScroll=
new IntersectionObserver
(function(entries, appearOnScroll)
{
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        
        }
    });
},
appearOptions);

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
});

sliders.forEach(slide =>{
    appearOnScroll.observe(slide);
});