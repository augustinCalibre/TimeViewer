const  newsdate ="1 Jan 2021";




const daysEl=document.getElementById('days');
const heuresEl=document.getElementById('heurs');
const minsEl=document.getElementById('mins');
const secdeEL=document.getElementById('secde');

function cptTime(){


    const newsYearsdate= new Date(newsdate);
    const  currentDate= new Date();
    // const difdate=new Date(currentDate-newsYearsdate);
    const totalsecond= (newsYearsdate-currentDate)/1000;
    const day = Math.floor(totalsecond/3600/24);
    const heurs=Math.floor(totalsecond/3600)%24;
    const min=Math.floor(totalsecond/60)%60;
    const secondes=Math.floor(totalsecond)%60;

    daysEl.innerHTML=formatTime(day);
    heuresEl.innerHTML=formatTime(heurs);
    minsEl.innerHTML=formatTime(min);
    secdeEL.innerHTML=formatTime(secondes);
    // console.log(difdate.getMinutes());
    console.log(day,heurs,min,secondes);
}

function formatTime(time){
    return time<10 ? `0${time}`:time ;
}
cptTime();
setInterval(cptTime,1000)