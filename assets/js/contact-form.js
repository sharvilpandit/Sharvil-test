let cform=document.getElementById("contact-form");
let cname=document.getElementById("cf_name");
let cmail=document.getElementById("cf_email");
let cmsg=document.getElementById("cf_message");
submit=document.getElementById("submit");
cform.addEventListener("submit",validate,false)

function validate(cevent){
    cname.addEventListener("keypress",()=>{
    if(cname===''){
        validate();
    }
    else{
        document.getElementById("cname").innerHTML=""; 
    }
    })
    cmail.addEventListener("keypress",()=>{
        if(cmail===''){
            validate();
        }
        else{
            document.getElementById("cmail").innerHTML=""; 
        }
        })
    cmsg.addEventListener("keypress",()=>{
        if(cmsg===''){
            validate();
        }
        else{
            document.getElementById("cmsg").innerHTML=""; 
        }
        })
            cevent.preventDefault();
        if(cname.value===''){
            document.getElementById("cname").innerHTML="Pls. Enter Name";
           }
           if(cmail.value===''){
            document.getElementById("cmail").innerHTML="Pls. Enter Email";
           }
           if(cmsg.value===''){
            document.getElementById("cmsg").innerHTML="Pls. Enter Message";
           }

           if(cname==='' || cmail.value==='' || cmsg.value===''){
            return false;
           }
           else if(cname!=='' || cmail.value!=='' || cmsg.value!==''){
           
           let msg=document.createElement("p");
           let size=document.createElement("h2")
           msg.setAttribute("class","text-success")
           msg.innerHTML="Message Sent Succesfully";
            size.appendChild(msg)
           document.getElementById("smsg").appendChild(size);
           }
}




