class Typewriter{
    constructor(txtElement, words, wait=500)
    {

        this.txtElement=txtElement;
        this.words=words;
        this.txt='';
        this.wordIndex=0;
        this.wait=parseInt(words, 10);
        this.type();
        this.isDeleting=false;
       
    }

    type() {
        const current = this.wordIndex % this.words.length;
        
        const fullTxt=this.words[current];

        if(this.isDeleting){
            this.txt=fullTxt.substring(0,this.txt.length - 1);
        }
        else
        {
            this.txt=fullTxt.substring(0,this.txt.length + 1);
     
        }

        //inserting text

        
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    

        //wait speed
        let typespeed=50;

        if(this.isDeleting){
            typespeed/=2;
        
        }
        //word completed

        if(!this.isDeleting && this.txt===fullTxt){
            typespeed=3000;
            this.isDeleting=true;
        }
           
        // ALL DELETED
        else if(this.isDeleting && this.txt==='')
        {
          this.txtElement.style.color="transparent";

            // 
        }

        setTimeout(() => this.type(), typespeed);
    }   
}

document.addEventListener('DOMContentLoaded', call);

function call(){

    setTimeout(init, 3000)
}
  
  // Init App
  function init() {
      
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // Init TypeWriter
    new Typewriter(txtElement, words, wait);
  }







