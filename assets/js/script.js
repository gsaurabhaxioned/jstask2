let next=document.querySelector("#next");
let prev=document.querySelector("#prev");
let step_number=document.querySelectorAll('.step-number');
let step_path=document.querySelectorAll('.step-path');
let len=step_number.length-1;
let i=0;
next.addEventListener('click',function(){
    if(i<len){
        i++;
    }else{
        i=len;
    }
    prev.style.backgroundColor="#3498db";
    if(i==len){
        this.style.backgroundColor="#E0E0E0";
    }
    step_number[i].style.borderColor="#3498db";
    step_path[i-1].style.backgroundColor="#3498db";
    

});

prev.addEventListener('click',function(){
    if(i>0){
        i--;
    }else{
        i=0;
    }
    next.style.backgroundColor="#3498db";
    if(i==0){
        this.style.backgroundColor="#E0E0E0";
    }
    step_number[i].style.borderColor="#3498db";
    step_number[i+1].style.borderColor="#E0E0E0";
    step_path[i].style.backgroundColor="#E0E0E0";

  
});



















