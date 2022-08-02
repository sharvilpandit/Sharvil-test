//task-1
let arr=[0, 1, false, 2, undefined, '', 3, null];
     for(i=0;i<arr.length;i++){
        if(arr[i]==0 || arr[i]==false || arr[i]==undefined || arr[i]=='' || arr[i]==null){
        
        }
        else{
            console.log(arr[i],"is null filtered")
        }
     }

//task-2

let arr2=[100, 150, 85, 15, 52, 89];

for(i=0;i<arr2.length;i++){
    if(arr2[i]<100){
        console.log(arr2[i],"is number filtered")
    }
}
//task-3
function compare(){
    console.log("comparison")   
    let a1=[5,10,15,20,29];
    let a2=[10,20,15,5,25];
    for(i=0;i<a1.length;i++){
        for(j=0;j<a2.length;j++){
            if(a1.length===a2.length){
                if(a2[j]===a1[i]){
                    console.log("true")
                }
            }
            else{
                console.log(false)
            }
        }
    }
}
compare();