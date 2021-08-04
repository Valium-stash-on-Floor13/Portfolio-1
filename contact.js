document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('message').addEventListener('blur',validateMessage);
let emailCheck=0, nameCheck=0, textCheck=0;

function validateName(){
  const name=document.getElementById('name');
   this.parentElement.classList.remove('success');
   this.parentElement.classList.remove('error');
   const re=/^[A-Za-z\ ]{3,20}$/;

  if(!re.test(name.value)){
      name.parentElement.classList.add('error');
     nameCheck=0;
     console.log(nameCheck)
    }
  else{
      name.parentElement.classList.add('success');
      nameCheck=1;
     console.log(nameCheck)
    }
    
    
}

function validateEmail(){
    const email=document.getElementById('email');
    this.parentElement.classList.remove('success');
    this.parentElement.classList.remove('error');
    const re=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]{2,8})\.([a-zA-Z]{2,8})$/;
    if(!re.test(email.value)){
     email.parentElement.classList.add('error');
     emailCheck=0;
     
    console.log(emailCheck)
        }
        else {
           email.parentElement.classList.add('success');
           emailCheck=1;
          console.log(emailCheck)
        }   
       

}



function validateMessage(){
    const message=document.getElementById('message');
    this.parentElement.classList.remove('success');
    this.parentElement.classList.remove('error');

       if(message.value.length <15){
          message.parentElement.classList.add('error');
          textCheck=0;
          console.log(textCheck)
        }
       else{
            message.parentElement.classList.add('success');
            textCheck=1;
            console.log(textCheck)
          }

  }

const submit= document.querySelector('.form');

submit.addEventListener('submit', e=>{

  e.preventDefault()
  if((emailCheck*textCheck*nameCheck)){
    const formSub= document.querySelector('.form-submission');
    formSub.style.visibility='visible';
    
    const email_=document.getElementById('email');
    const name_=document.getElementById('name');
    const message_=document.getElementById('message');

    setTimeout(function(){
      formSub.style.visibility='hidden';
          name_.value='';
          email_.value='';
          message_.value='';
          message_.parentElement.classList.remove('success');
          email_.parentElement.classList.remove('success');
          name_.parentElement.classList.remove('success');
    }, 3000)
    
  }

  
})

