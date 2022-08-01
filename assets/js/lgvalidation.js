form=document.getElementById("lgin");
let lgpwd=document.getElementById('lgpwd');
let lgmail=document.getElementById("lgmail");
submit=document.getElementById("submit");
form.addEventListener("submit",validate,false);
console.log("lg")
function validate(lgevent){
    console.log("scess")
    lgmail.addEventListener("keypress",()=>{
        if(lgmail===''){
            validate();
        }
        else{
            document.getElementById("lgmailerror").innerHTML=""; 
        }
        })
    lgpwd.addEventListener("keypress",()=>{
        if(lgpwd===''){
            validate();
        }
        else{
            document.getElementById("lgpwderror").innerHTML=""; 
        }
        })

        lgevent.preventDefault();

        if(lgmail.value===''){
            document.getElementById("lgmailerror").innerHTML="Pls. Enter Email";
           }
           if(lgpwd.value===''){
            document.getElementById("lgpwderror").innerHTML="Pls. Enter Password";
           }

           if(lgmail.value==='' || lgpwd.value===''){
            return false;
           }
}