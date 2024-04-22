
let i=1
let st=document.getElementById("main");
 for( i=1;i<=50;i++){
     if(i%3==0){
        console.log("tre")
    st+=`<div class="box tre">buzz</div>`;
      
    }else{
        st+=`<div class="box ">${i}</div>`;
    }
    
    if(i%5==0){
        console.log("cinque")
        st+=`<div class="box cinque">fizz</div>`;

    }
     if(i%5==0 && i%3==0){
        console.log("2")
        st+=`<div class="box entrambe">FizzBuzz</div>`;

    }
        
    
    
    

    
   
     console.log(i);
    
     
 }

document.getElementById("main").innerHTML=st;


