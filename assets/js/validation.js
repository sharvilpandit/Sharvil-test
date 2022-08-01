let form=document.getElementById('reg');
let uname=document.getElementById('name');
let pwd=document.getElementById('pwd');
let mail=document.getElementById("mail");
let ctry=document.getElementById('nation');
let terms=document.getElementById("tc");
let submit=document.getElementById("submit");
let tc=document.getElementById("tc");
form.addEventListener("submit",validate,false);
console.log("hello")
function validate(event){
   
   
   let male=document.getElementById("male");
   let female=document.getElementById("female");
   uname.addEventListener("keypress",()=>{
    if(uname===''){
        validate();
    }
    else{
        document.getElementById("namerror").innerHTML=""; 
    }
    })
    mail.addEventListener("keypress",()=>{
        if(mail===''){
            validate();
        }
        else{
            document.getElementById("mailerror").innerHTML=""; 
        }
        })
    pwd.addEventListener("keypress",()=>{
        if(pwd===''){
            validate();
        }
        else{
            document.getElementById("pwderror").innerHTML=""; 
        }
        })
    ctry.addEventListener("click",()=>{
        if(ctry===''){
            validate();
        }
        else{
            document.getElementById("ctrerror").innerHTML=""; 
        }
        })
    male.addEventListener("click",()=>{
            document.getElementById("generror").innerHTML="";
    })
    female.addEventListener("click",()=>{
        document.getElementById("generror").innerHTML="";
    })
    tc.addEventListener("click",()=>{
        document.getElementById("tcerror").innerHTML="";
    })

    event.preventDefault();
   if(uname.value===''){
    document.getElementById("namerror").innerHTML="Pls. Enter Name";
   }
   if(mail.value===''){
    document.getElementById("mailerror").innerHTML="Pls. Enter Email";
   }
   if(pwd.value===''){
    document.getElementById("pwderror").innerHTML="Pls. Enter Password";
   }
   if(ctry.value===''){
    document.getElementById("ctrerror").innerHTML="Plese Select Country";
   }
   if(male.checked===false && female.checked===false){
    document.getElementById("generror").innerHTML="Please Selct Gender";
   }
   if(tc.checked===false){
    document.getElementById("tcerror").innerHTML="Pls read t&c";
   }

   if(uname.value==='' || mail.value===''  || pwd.value==='' || ctry.value==='' ||male.checked===false && female.checked===false ||tc.checked===false ){
    return false;
   }

}