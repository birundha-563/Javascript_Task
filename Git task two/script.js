let counter=0;
const valuedisplay=document.getElementById("valuedisplay");

function increment(){
  counter++;
  console.log ("increment"+ counter); 
  valuedisplay.innerText= counter;
}
function decrement(){
    
    if(counter>0){
    counter--;
    console.log ("decrement"+ counter) ;
    valuedisplay.innerText= counter;
  }
}