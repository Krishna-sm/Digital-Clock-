let h=document.getElementById("h")
let m=document.getElementById("m")
let s=document.getElementById("s")
let pm=document.getElementById("pm")

let DateTime=new Date();

m.innerHTML=DateTime.getMinutes();
if(DateTime.getSeconds()<10)
{
    s.innerHTML="0"+DateTime.getSeconds();

}
else{
    
s.innerHTML=DateTime.getSeconds();
}

if(DateTime.getHours()<=12)
{
    h.innerHTML=DateTime.getHours();
    pm.innerHTML="AM"
}
else{
    h.innerHTML=DateTime.getHours()%12;
    pm.innerHTML="PM"
}

setInterval(()=>{
    h.innerHTML=new Date().getHours()<=12?new Date().getHours():new Date().getHours()%12<10?"0"+new Date().getHours()%12:new Date().getHours();
    m.innerHTML=new Date().getMinutes()<10?"0"+new Date().getMinutes():new Date().getMinutes();
    s.innerHTML=new Date().getUTCSeconds()<10?"0"+new Date().getUTCSeconds():new Date().getUTCSeconds();
    pm.innerHTML=new Date().getHours()<=12?"AM":"PM";
 
 
},1000)
