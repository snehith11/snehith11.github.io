var min = 00;
var sec = 00;
var cs = 00;
minElement= document.getElementById("mins");
secElement= document.getElementById("sec");
csElement= document.getElementById("cs"); 
var interval;

function start(){
     interval=setInterval(()=>{
         if(cs<10)
            csElement.textContent=`0${cs}`;
         else
            csElement.textContent = cs;
        cs++
        if(cs > 99){
            cs=0;
            csElement.textContent = `0${cs}`;
            sec++;
            if(sec<10)
                secElement.textContent=`0${sec}`;
            else
                secElement.textContent=sec;
        }
        if(sec > 59){
            sec=0;
            secElement.textContent=`0${sec}`;
            min++;
            if(sec<10)
                minElement.textContent=`0${min}`;
            else
                minElement.textContent = min;
        }
    },10)
}
function pause(){
    clearInterval(interval);
}
function reset(){
    cs= 0;
    min= 0;
    sec = 0;
    pause();
    csElement.textContent= "00";
    secElement.textContent= "00";
    minElement.textContent= "00";
}