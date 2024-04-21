const st=document.querySelector("main.lista");
 for(let i=1;i<=50;i++){
    const div= '<div id="p" class="box"></div>';
    
    st.innerHTML+=div;
    div.innerHTML+=i;
     console.log(i);
     
 }


